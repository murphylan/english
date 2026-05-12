"use client";

// 1. React
import * as React from "react";

// 3. Third-party
import { Toaster, toast } from "sonner";

// 6. Hooks
import { useVocabularyProgress } from "@/hooks/use-vocabulary-progress";

// 7. Types
import type { StudyMode, WordEntry } from "@/types/vocabulary-types";

import { STUDY_MODES } from "@/lib/learning/progress";
import {
  getProgress,
  getTopicSummaries,
  normalizeAnswer,
  selectSessionWords,
} from "@/lib/learning/progress";
import { TOPICS, WORD_ENTRIES } from "@/lib/mock-data/vocabulary-data";

interface AttemptResult {
  wordId: string;
  correct: boolean;
}

interface WordExpansion {
  synonyms: string[];
  antonyms: string[];
  forms: string[];
  collocations: string[];
}

const STATUS_LABELS = {
  new: "未学",
  learning: "学习中",
  reviewing: "复习中",
  mastered: "已掌握",
} as const;

const zhCollator = new Intl.Collator("zh-CN");

export function VocabularyApp() {
  // 1. Hooks
  const { initialized, progressByWordId, recordAnswer, resetProgress } =
    useVocabularyProgress();

  // 2. State
  const [selectedTopicId, setSelectedTopicId] = React.useState("all");
  const [studyMode, setStudyMode] = React.useState<StudyMode>("flashcard");
  const [batchSize, setBatchSize] = React.useState(10);
  const [sessionWords, setSessionWords] = React.useState<WordEntry[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [typedAnswer, setTypedAnswer] = React.useState("");
  const [attempts, setAttempts] = React.useState<AttemptResult[]>([]);
  const autoStartedRef = React.useRef(false);

  // 3. Memoized values
  const filteredWords = React.useMemo(() => {
    if (selectedTopicId === "all") {
      return WORD_ENTRIES;
    }

    return WORD_ENTRIES.filter((word) => word.topicId === selectedTopicId);
  }, [selectedTopicId]);

  const topicSummaries = React.useMemo(
    () => getTopicSummaries(TOPICS, WORD_ENTRIES, progressByWordId),
    [progressByWordId]
  );

  const currentWord = sessionWords[currentIndex];
  const currentProgress = React.useMemo(() => {
    if (!currentWord) {
      return undefined;
    }

    return getProgress(progressByWordId, currentWord.id);
  }, [currentWord, progressByWordId]);

  const activeTopic = React.useMemo(
    () => TOPICS.find((topic) => topic.id === currentWord?.topicId),
    [currentWord]
  );

  const nextWord = sessionWords[currentIndex + 1];

  const exampleSentences = React.useMemo(() => {
    if (!currentWord) {
      return [];
    }

    return buildExampleSentences(currentWord);
  }, [currentWord]);

  const choiceOptions = React.useMemo(() => {
    if (!currentWord) {
      return [];
    }

    return buildChoiceOptions(currentWord, filteredWords, studyMode);
  }, [currentWord, filteredWords, studyMode]);

  const totalAnswered = React.useMemo(
    () =>
      Object.values(progressByWordId).reduce(
        (sum, progress) => sum + progress.correctCount + progress.wrongCount,
        0
      ),
    [progressByWordId]
  );

  const masteredCount = React.useMemo(
    () =>
      Object.values(progressByWordId).filter(
        (progress) => progress.status === "mastered"
      ).length,
    [progressByWordId]
  );

  const dueCount = React.useMemo(
    () =>
      WORD_ENTRIES.filter((word) => {
        const progress = getProgress(progressByWordId, word.id);

        return progress.status === "learning" && progress.intervalDays === 0;
      }).length,
    [progressByWordId]
  );

  const correctAttempts = attempts.filter((attempt) => attempt.correct).length;
  const currentWordMarkedWrong = currentWord
    ? attempts.some(
        (attempt) => attempt.wordId === currentWord.id && !attempt.correct
      )
    : false;
  const sessionFinished =
    sessionWords.length > 0 && currentIndex >= sessionWords.length;
  const sessionActive = Boolean(currentWord) && !sessionFinished;
  const sessionPercent =
    sessionWords.length === 0
      ? 0
      : Math.min(100, Math.round((currentIndex / sessionWords.length) * 100));

  // 4. Callbacks
  const handleStartSession = React.useCallback(
    (announce = true) => {
    const selectedWords = selectSessionWords(
      filteredWords,
      progressByWordId,
      batchSize
    );

    setSessionWords(selectedWords);
    setCurrentIndex(0);
    setRevealed(false);
    setSelectedOption("");
    setTypedAnswer("");
    setAttempts([]);

    if (!announce) {
      return;
    }

    if (selectedWords.length === 0) {
      toast.error("当前筛选条件下没有可学习的单词");
    } else {
      toast.success(`已生成 ${selectedWords.length} 个词的学习任务`);
    }
    },
    [batchSize, filteredWords, progressByWordId]
  );

  const handleRecordAnswer = React.useCallback(
    (correct: boolean) => {
      if (!currentWord) {
        return;
      }

      recordAnswer(currentWord.id, studyMode, correct);
      setAttempts((current) => [
        ...current,
        { wordId: currentWord.id, correct },
      ]);
      setCurrentIndex((index) => index + 1);
      setRevealed(false);
      setSelectedOption("");
      setTypedAnswer("");
    },
    [currentWord, recordAnswer, studyMode]
  );

  const handleMarkUnfamiliar = React.useCallback(() => {
    if (!currentWord) {
      return;
    }

    if (!currentWordMarkedWrong) {
      recordAnswer(currentWord.id, studyMode, false);
      setAttempts((current) => [
        ...current,
        { wordId: currentWord.id, correct: false },
      ]);
    }

    setRevealed(true);
    toast.info("已标记为还不熟，继续停留在当前单词");
  }, [currentWord, currentWordMarkedWrong, recordAnswer, studyMode]);

  const handleStepWord = React.useCallback(
    (direction: -1 | 1) => {
      if (sessionWords.length === 0) {
        return;
      }

      setCurrentIndex((index) => {
        if (direction < 0) {
          return Math.max(0, Math.min(index - 1, sessionWords.length - 1));
        }

        return Math.min(index + 1, sessionWords.length);
      });
      setRevealed(false);
      setSelectedOption("");
      setTypedAnswer("");
    },
    [sessionWords.length]
  );

  const handleChoiceAnswer = React.useCallback(
    (option: string) => {
      if (!currentWord) {
        return;
      }

      const correctAnswer =
        studyMode === "choice-en-zh"
          ? currentWord.chineseDefinition
          : currentWord.word;
      const correct = option === correctAnswer;

      setSelectedOption(option);
      toast[correct ? "success" : "error"](
        correct ? "答对了" : `正确答案：${correctAnswer}`
      );
      window.setTimeout(() => handleRecordAnswer(correct), 350);
    },
    [currentWord, handleRecordAnswer, studyMode]
  );

  const handleSpellingSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!currentWord) {
        return;
      }

      const correct =
        normalizeAnswer(typedAnswer) === normalizeAnswer(currentWord.word);

      toast[correct ? "success" : "error"](
        correct ? "拼写正确" : `正确拼写：${currentWord.word}`
      );
      handleRecordAnswer(correct);
    },
    [currentWord, handleRecordAnswer, typedAnswer]
  );

  const handleResetProgress = React.useCallback(() => {
    resetProgress();
    setSessionWords([]);
    setCurrentIndex(0);
    setAttempts([]);
    autoStartedRef.current = false;
    toast.success("学习进度已重置");
  }, [resetProgress]);

  // 5. Effects
  React.useEffect(() => {
    if (!initialized || autoStartedRef.current) {
      return;
    }

    autoStartedRef.current = true;
    handleStartSession(false);
  }, [handleStartSession, initialized]);

  // 6. Render
  return (
    <main className="min-h-screen overflow-hidden bg-[#ddf7cf] text-emerald-950">
      <Toaster richColors />
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-8 top-10 h-28 w-28 rounded-full bg-white/45 blur-2xl" />
        <div className="pointer-events-none absolute right-8 top-20 h-40 w-40 rounded-full bg-lime-200/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl" />

        <header className="relative rounded-[1.75rem] border-4 border-emerald-900/10 bg-[#fff9e8] px-4 py-3 shadow-[0_10px_0_rgba(20,83,45,0.1)] sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-emerald-700">
                Spring Academy
              </p>
              <h1 className="mt-1 text-2xl font-black tracking-tight text-emerald-950 sm:text-4xl">
                技术英语记忆训练器
              </h1>
              <p className="mt-1 truncate text-sm font-bold text-emerald-800">
                当前目标：看清一个单词、理解一个场景、完成一次反馈。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center sm:min-w-72">
              <MetricCard label="已掌握" value={masteredCount} />
              <MetricCard label="待复习" value={dueCount} />
              <MetricCard label="已答题" value={totalAnswered} />
            </div>
          </div>
        </header>

        <section className="relative flex flex-1 flex-col gap-4">
          <StudyPanel
            activeTopic={activeTopic}
            attempts={attempts}
            choiceOptions={choiceOptions}
            correctAttempts={correctAttempts}
            currentIndex={currentIndex}
            currentProgress={currentProgress}
            currentWord={currentWord}
            currentWordMarkedWrong={currentWordMarkedWrong}
            exampleSentences={exampleSentences}
            handleChoiceAnswer={handleChoiceAnswer}
            handleMarkUnfamiliar={handleMarkUnfamiliar}
            handleRecordAnswer={handleRecordAnswer}
            handleSpellingSubmit={handleSpellingSubmit}
            handleStartSession={() => handleStartSession()}
            handleStepWord={handleStepWord}
            nextWord={nextWord}
            revealed={revealed}
            selectedOption={selectedOption}
            sessionActive={sessionActive}
            sessionFinished={sessionFinished}
            sessionPercent={sessionPercent}
            sessionWords={sessionWords}
            setRevealed={setRevealed}
            setTypedAnswer={setTypedAnswer}
            studyMode={studyMode}
            typedAnswer={typedAnswer}
          />

          <div className="w-full">
            <HiddenLearningTools
              batchSize={batchSize}
              filteredWords={filteredWords}
              handleResetProgress={handleResetProgress}
              handleStartSession={() => handleStartSession()}
              initialized={initialized}
              progressByWordId={progressByWordId}
              selectedTopicId={selectedTopicId}
              setBatchSize={setBatchSize}
              setSelectedTopicId={setSelectedTopicId}
              setStudyMode={setStudyMode}
              studyMode={studyMode}
              topicSummaries={topicSummaries}
            />
          </div>

          <footer className="relative rounded-[1.75rem] border-4 border-emerald-900/10 bg-[#fff9e8]/80 px-5 py-4 text-center shadow-[0_8px_0_rgba(20,83,45,0.08)]">
            <p className="text-sm font-bold text-emerald-800">
              Built on{" "}
              <a
                href="https://murphylan.cloud"
                target="_blank"
                rel="noreferrer"
                className="font-black text-emerald-950 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-600"
              >
                Murphy Cloud
              </a>
              ：一站式云端 SaaS 产品供应商
            </p>
          </footer>
        </section>
      </section>
    </main>
  );
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border-2 border-emerald-900/10 bg-white px-3 py-2 shadow-[0_4px_0_rgba(20,83,45,0.08)]">
      <p className="text-xl font-black text-emerald-700">{value}</p>
      <p className="text-[11px] font-bold text-emerald-700/70">{label}</p>
    </div>
  );
}

function StepButton({
  direction,
  disabled,
  label,
  onClick,
}: {
  direction: "back" | "next";
  disabled: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-1 rounded-full border-2 border-emerald-900/10 bg-white px-3 py-2 text-xs font-black text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-300 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
    >
      {direction === "back" ? <StepBackIcon /> : null}
      <span>{label}</span>
      {direction === "next" ? <StepForwardIcon /> : null}
    </button>
  );
}

function StepBackIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M10.5 3.5 6 8l4.5 4.5M4.5 3v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function StepForwardIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="m5.5 3.5 4.5 4.5-4.5 4.5M11.5 3v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function StudyPanel({
  activeTopic,
  attempts,
  choiceOptions,
  correctAttempts,
  currentIndex,
  currentProgress,
  currentWord,
  currentWordMarkedWrong,
  exampleSentences,
  handleChoiceAnswer,
  handleMarkUnfamiliar,
  handleRecordAnswer,
  handleSpellingSubmit,
  handleStartSession,
  handleStepWord,
  nextWord,
  revealed,
  selectedOption,
  sessionActive,
  sessionFinished,
  sessionPercent,
  sessionWords,
  setRevealed,
  setTypedAnswer,
  studyMode,
  typedAnswer,
}: {
  activeTopic?: (typeof TOPICS)[number];
  attempts: AttemptResult[];
  choiceOptions: string[];
  correctAttempts: number;
  currentIndex: number;
  currentProgress?: ReturnType<typeof getProgress>;
  currentWord?: WordEntry;
  currentWordMarkedWrong: boolean;
  exampleSentences: string[];
  handleChoiceAnswer: (option: string) => void;
  handleMarkUnfamiliar: () => void;
  handleRecordAnswer: (correct: boolean) => void;
  handleSpellingSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleStartSession: () => void;
  handleStepWord: (direction: -1 | 1) => void;
  nextWord?: WordEntry;
  revealed: boolean;
  selectedOption: string;
  sessionActive: boolean;
  sessionFinished: boolean;
  sessionPercent: number;
  sessionWords: WordEntry[];
  setRevealed: (value: boolean) => void;
  setTypedAnswer: (value: string) => void;
  studyMode: StudyMode;
  typedAnswer: string;
}) {
  if (sessionFinished) {
    const accuracy =
      attempts.length === 0 ? 0 : Math.round((correctAttempts / attempts.length) * 100);

    return (
      <div className="rounded-[2.5rem] border-4 border-emerald-900/10 bg-[#fff9e8] p-8 shadow-[0_18px_0_rgba(20,83,45,0.14)]">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
          Session Complete
        </p>
        <h2 className="mt-3 text-5xl font-black">本轮完成</h2>
        <p className="mt-4 text-lg text-emerald-800">
          共完成 {attempts.length} 题，答对 {correctAttempts} 题，正确率{" "}
          {accuracy}%。
        </p>
        <button
          type="button"
          onClick={handleStartSession}
          className="mt-8 rounded-full bg-emerald-600 px-6 py-3 text-sm font-black text-white shadow-[0_6px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
        >
          重新开始一轮
        </button>
      </div>
    );
  }

  if (!sessionActive || !currentWord) {
    return (
      <div className="rounded-[2.5rem] border-4 border-emerald-900/10 bg-[#fff9e8] p-8 shadow-[0_18px_0_rgba(20,83,45,0.14)]">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
          Ready
        </p>
        <h2 className="mt-3 text-4xl font-black">准备进入春日课堂</h2>
        <p className="mt-3 max-w-2xl text-emerald-800">
          点击开始后，页面会只围绕当前单词展示读音、释义、例句和练习。
        </p>
        <button
          type="button"
          onClick={handleStartSession}
          className="mt-8 rounded-full bg-emerald-600 px-6 py-3 text-sm font-black text-white shadow-[0_6px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
        >
          开始学习
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border-4 border-emerald-900/10 bg-[#fff9e8] p-4 shadow-[0_14px_0_rgba(20,83,45,0.12)] sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
            Word in Progress
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm font-bold text-emerald-700">
            <span>
              {currentIndex + 1} / {sessionWords.length}
            </span>
            <span>·</span>
            <span>{activeTopic?.titleZh ?? "全部主题"}</span>
            <span>·</span>
            <span>{STATUS_LABELS[currentProgress?.status ?? "new"]}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StepButton
            disabled={currentIndex <= 0}
            direction="back"
            label="上一个"
            onClick={() => handleStepWord(-1)}
          />
          <span className="rounded-full border-2 border-emerald-900/10 bg-white px-4 py-2 text-sm font-black text-emerald-700">
            No.{currentWord.no}
          </span>
          <span className="hidden rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800 sm:inline">
            {nextWord ? `Next: ${nextWord.word}` : "Final word"}
          </span>
          <StepButton
            disabled={currentIndex >= sessionWords.length}
            direction="next"
            label="下一个"
            onClick={() => handleStepWord(1)}
          />
        </div>
      </div>

      <div className="mt-3 h-2 rounded-full bg-emerald-100">
        <div
          className="h-2 rounded-full bg-emerald-500 transition-all"
          style={{ width: `${sessionPercent}%` }}
        />
      </div>

      <div className="mt-4">
        <WordFocusCard
          choiceOptions={choiceOptions}
          currentWord={currentWord}
          currentWordMarkedWrong={currentWordMarkedWrong}
          exampleSentences={exampleSentences}
          handleChoiceAnswer={handleChoiceAnswer}
          handleMarkUnfamiliar={handleMarkUnfamiliar}
          handleRecordAnswer={handleRecordAnswer}
          handleSpellingSubmit={handleSpellingSubmit}
          revealed={revealed}
          selectedOption={selectedOption}
          setRevealed={setRevealed}
          setTypedAnswer={setTypedAnswer}
          studyMode={studyMode}
          typedAnswer={typedAnswer}
        />
      </div>
    </div>
  );
}

function WordFocusCard({
  choiceOptions,
  currentWord,
  currentWordMarkedWrong,
  exampleSentences,
  handleChoiceAnswer,
  handleMarkUnfamiliar,
  handleRecordAnswer,
  handleSpellingSubmit,
  revealed,
  selectedOption,
  setRevealed,
  setTypedAnswer,
  studyMode,
  typedAnswer,
}: {
  choiceOptions: string[];
  currentWord: WordEntry;
  currentWordMarkedWrong: boolean;
  exampleSentences: string[];
  handleChoiceAnswer: (option: string) => void;
  handleMarkUnfamiliar: () => void;
  handleRecordAnswer: (correct: boolean) => void;
  handleSpellingSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  revealed: boolean;
  selectedOption: string;
  setRevealed: (value: boolean) => void;
  setTypedAnswer: (value: string) => void;
  studyMode: StudyMode;
  typedAnswer: string;
}) {
  const wordExpansion = React.useMemo(
    () => buildWordExpansion(currentWord),
    [currentWord]
  );
  const wordTitleStyle = React.useMemo(
    () => ({ fontSize: getWordTitleFontSize(currentWord.word) }),
    [currentWord.word]
  );
  const handleSpeak = React.useCallback((text: string) => {
    if (!("speechSynthesis" in window)) {
      toast.error("当前浏览器不支持语音播放");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = text.trim().includes(" ") ? 0.88 : 0.78;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, []);
  const showAnswer =
    revealed ||
    studyMode === "choice-en-zh" ||
    studyMode === "choice-zh-en" ||
    studyMode === "scenario";

  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border-2 border-emerald-900/10 bg-white p-5">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime-200" />
      <div className="absolute -bottom-12 left-10 h-24 w-24 rounded-full bg-emerald-100" />
      <div className="relative">
        <div className="grid gap-4 xl:grid-cols-[minmax(420px,1.2fr)_minmax(220px,0.8fr)_300px]">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
              Current Word
            </p>
            <h2
              className="mt-2 whitespace-nowrap font-extrabold leading-none text-emerald-950"
              style={wordTitleStyle}
            >
              {currentWord.word}
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <p className="text-lg font-bold text-emerald-700">
                {currentWord.phonetic}
              </p>
              <SpeakButton
                label={`朗读单词 ${currentWord.word}`}
                onClick={() => handleSpeak(currentWord.word)}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-3xl bg-emerald-50 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
                中文释义
              </p>
              <p className="mt-2 text-2xl font-black">
                {showAnswer ? currentWord.chineseDefinition : "先想一想"}
              </p>
            </div>
            <div className="rounded-3xl bg-lime-50 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
                English Meaning
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-emerald-900">
                {showAnswer
                  ? currentWord.englishDefinition
                  : "Reveal the meaning when you are ready."}
              </p>
            </div>
          </div>

          <PracticeContent
            choiceOptions={choiceOptions}
            currentWord={currentWord}
            currentWordMarkedWrong={currentWordMarkedWrong}
            handleChoiceAnswer={handleChoiceAnswer}
            handleMarkUnfamiliar={handleMarkUnfamiliar}
            handleRecordAnswer={handleRecordAnswer}
            handleSpellingSubmit={handleSpellingSubmit}
            revealed={revealed}
            selectedOption={selectedOption}
            setRevealed={setRevealed}
            setTypedAnswer={setTypedAnswer}
            studyMode={studyMode}
            typedAnswer={typedAnswer}
          />
        </div>

        <div className="mt-4 rounded-3xl border-2 border-dashed border-emerald-200 bg-[#fffdf4] p-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
            Example & Word Power
          </p>
          <div className="mt-3 grid gap-3 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl bg-white px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                  Example
                </p>
                <SpeakButton
                  label="朗读例句"
                  onClick={() => handleSpeak(exampleSentences[0])}
                />
              </div>
              <p className="mt-2 text-sm font-bold leading-6 text-emerald-900">
                {exampleSentences[0]}
              </p>
            </div>
            <WordExpansionCard expansion={wordExpansion} />
          </div>
        </div>
      </div>
    </article>
  );
}

function WordExpansionCard({ expansion }: { expansion: WordExpansion }) {
  return (
    <div className="grid gap-2 rounded-2xl bg-white p-3 sm:grid-cols-2">
      <ExpansionGroup label="近义表达" values={expansion.synonyms} />
      <ExpansionGroup label="反义 / 对比" values={expansion.antonyms} />
      <ExpansionGroup label="词形变化" values={expansion.forms} />
      <ExpansionGroup label="固定搭配" values={expansion.collocations} />
    </div>
  );
}

function ExpansionGroup({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="rounded-2xl bg-emerald-50 px-3 py-2">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-600">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-emerald-900"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

function SpeakButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-emerald-900/10 bg-emerald-50 text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100"
    >
      <SpeakerIcon />
    </button>
  );
}

function SpeakerIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 6.2v3.6h2.4l3.4 2.7v-9L4.9 6.2H2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M10.4 5.4c.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1.1 2.6M12.4 3.7A6 6 0 0 1 14 8a6 6 0 0 1-1.6 4.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PracticeContent({
  choiceOptions,
  currentWord,
  currentWordMarkedWrong,
  handleChoiceAnswer,
  handleMarkUnfamiliar,
  handleRecordAnswer,
  handleSpellingSubmit,
  revealed,
  selectedOption,
  setRevealed,
  setTypedAnswer,
  studyMode,
  typedAnswer,
}: {
  choiceOptions: string[];
  currentWord: WordEntry;
  currentWordMarkedWrong: boolean;
  handleChoiceAnswer: (option: string) => void;
  handleMarkUnfamiliar: () => void;
  handleRecordAnswer: (correct: boolean) => void;
  handleSpellingSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  revealed: boolean;
  selectedOption: string;
  setRevealed: (value: boolean) => void;
  setTypedAnswer: (value: string) => void;
  studyMode: StudyMode;
  typedAnswer: string;
}) {
  return (
    <div className="rounded-[1.5rem] border-2 border-emerald-900/10 bg-[#fff9e8] p-4">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
        Practice
      </p>

      {studyMode === "flashcard" && (
        <div className="mt-3 space-y-3">
          {!revealed ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="w-full rounded-3xl bg-emerald-600 px-5 py-4 font-black text-white shadow-[0_6px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              显示释义
            </button>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <button
                type="button"
                onClick={handleMarkUnfamiliar}
                disabled={currentWordMarkedWrong}
                className="rounded-3xl border-2 border-rose-200 bg-rose-50 px-5 py-4 font-black text-rose-700 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {currentWordMarkedWrong ? "已标记" : "还不熟"}
              </button>
              <button
                type="button"
                onClick={() => handleRecordAnswer(true)}
                className="rounded-3xl bg-emerald-600 px-5 py-4 font-black text-white shadow-[0_6px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                记住了
              </button>
            </div>
          )}

          <p className="rounded-2xl bg-lime-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800">
            把 {currentWord.word} 和“{currentWord.chineseDefinition}”连在一个真实技术场景里复述一遍。
          </p>
        </div>
      )}

      <div className={studyMode === "flashcard" ? "mt-0" : "mt-4"}>
        {(studyMode === "choice-en-zh" ||
          studyMode === "choice-zh-en" ||
          studyMode === "scenario") && (
          <div className="space-y-4">
            <QuestionPrompt currentWord={currentWord} studyMode={studyMode} />
            <div className="grid gap-3">
              {choiceOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleChoiceAnswer(option)}
                  disabled={Boolean(selectedOption)}
                  className={`rounded-3xl border-2 px-5 py-4 text-left font-bold transition ${
                    selectedOption === option
                      ? "border-emerald-500 bg-emerald-100"
                      : "border-emerald-900/10 bg-emerald-50 hover:-translate-y-0.5 hover:border-emerald-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {studyMode === "spelling" && (
          <form className="space-y-4" onSubmit={handleSpellingSubmit}>
            <QuestionPrompt currentWord={currentWord} studyMode={studyMode} />
            <input
              value={typedAnswer}
              onChange={(event) => setTypedAnswer(event.target.value)}
              autoFocus
              placeholder="输入英文单词或短语"
              className="w-full rounded-3xl border-2 border-emerald-900/10 bg-emerald-50 px-5 py-4 text-lg font-bold text-emerald-950 outline-none ring-emerald-400/30 focus:ring-4"
            />
            <button
              type="submit"
              className="w-full rounded-3xl bg-emerald-600 px-5 py-4 font-black text-white shadow-[0_6px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              提交答案
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function QuestionPrompt({
  currentWord,
  studyMode,
}: {
  currentWord: WordEntry;
  studyMode: StudyMode;
}) {
  if (studyMode === "choice-en-zh") {
    return (
      <div className="rounded-3xl bg-emerald-50 p-5">
        <p className="text-3xl font-black text-emerald-950">
          {currentWord.word}
        </p>
        <p className="mt-2 font-bold text-emerald-700">{currentWord.phonetic}</p>
      </div>
    );
  }

  if (studyMode === "scenario") {
    return (
      <div className="rounded-3xl bg-emerald-50 p-5">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
          Scenario
        </p>
        <p className="mt-3 text-lg font-bold leading-8 text-emerald-900">
          In a technical discussion, which term means:
          <span className="mt-2 block text-emerald-950">
            “{currentWord.englishDefinition}”
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-emerald-50 p-5">
      <p className="text-2xl font-black text-emerald-950">
        {currentWord.chineseDefinition}
      </p>
      <p className="mt-3 font-bold leading-7 text-emerald-800">
        {currentWord.englishDefinition}
      </p>
    </div>
  );
}

function HiddenLearningTools({
  batchSize,
  filteredWords,
  handleResetProgress,
  handleStartSession,
  initialized,
  progressByWordId,
  selectedTopicId,
  setBatchSize,
  setSelectedTopicId,
  setStudyMode,
  studyMode,
  topicSummaries,
}: {
  batchSize: number;
  filteredWords: WordEntry[];
  handleResetProgress: () => void;
  handleStartSession: () => void;
  initialized: boolean;
  progressByWordId: Record<string, ReturnType<typeof getProgress>>;
  selectedTopicId: string;
  setBatchSize: (value: number) => void;
  setSelectedTopicId: (value: string) => void;
  setStudyMode: (value: StudyMode) => void;
  studyMode: StudyMode;
  topicSummaries: ReturnType<typeof getTopicSummaries>;
}) {
  return (
    <details className="rounded-[2rem] border-4 border-emerald-900/10 bg-white/70 p-4 shadow-[0_12px_0_rgba(20,83,45,0.08)] backdrop-blur sm:p-5">
      <summary className="cursor-pointer text-lg font-black marker:text-emerald-700">
        学习设置与题库
        <span className="ml-2 text-sm font-bold text-emerald-700">默认隐藏</span>
      </summary>

      <div className="mt-4 grid gap-4">
        <div className="grid gap-3 rounded-[1.5rem] bg-emerald-50/70 p-3 lg:grid-cols-[minmax(0,1fr)_220px_220px]">
          <label className="block text-sm font-black text-emerald-900">
            主题
            <select
              value={selectedTopicId}
              onChange={(event) => setSelectedTopicId(event.target.value)}
              className="mt-2 w-full rounded-2xl border-2 border-emerald-900/10 bg-white px-4 py-3 text-sm font-bold text-emerald-950 outline-none ring-emerald-400/30 focus:ring-4"
            >
              <option value="all">全部主题（1000 词）</option>
              {TOPICS.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.titleZh} / {topic.titleEn}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-black text-emerald-900">
            每轮词数：{batchSize}
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              value={batchSize}
              onChange={(event) => setBatchSize(Number(event.target.value))}
              className="mt-5 w-full accent-emerald-500"
            />
          </label>

          <div className="grid grid-cols-2 gap-2 self-end">
            <button
              type="button"
              onClick={handleStartSession}
              disabled={!initialized}
              className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-[0_5px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              生成新任务
            </button>
            <button
              type="button"
              onClick={handleResetProgress}
              className="rounded-2xl border-2 border-rose-200 bg-rose-50 px-4 py-3 text-sm font-black text-rose-700 transition hover:-translate-y-0.5"
            >
              重置
            </button>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[1.5rem] bg-white p-4">
            <h3 className="text-sm font-black text-emerald-900">训练模式</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {STUDY_MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setStudyMode(mode.id)}
                  className={`rounded-2xl border-2 px-4 py-3 text-left transition ${
                    studyMode === mode.id
                      ? "border-emerald-500 bg-emerald-100"
                      : "border-emerald-900/10 bg-white hover:border-emerald-300"
                  }`}
                >
                  <span className="block text-sm font-black">{mode.label}</span>
                  <span className="mt-1 block text-xs font-bold leading-5 text-emerald-700/80">
                    {mode.description}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] bg-white p-4">
            <h3 className="text-sm font-black text-emerald-900">主题进度</h3>
            <div className="mt-3 grid max-h-64 gap-2 overflow-auto pr-1 sm:grid-cols-2">
              {TOPICS.map((topic) => (
                <TopicOption
                  key={topic.id}
                  selectedTopicId={selectedTopicId}
                  setSelectedTopicId={setSelectedTopicId}
                  topic={topic}
                  topicSummaries={topicSummaries}
                />
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-[1.5rem] bg-white p-4">
          <h3 className="text-sm font-black text-emerald-900">
            题库预览：{filteredWords.length} 个词
          </h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWords.slice(0, 9).map((word) => {
              const progress = getProgress(progressByWordId, word.id);

              return (
                <div
                  key={word.id}
                  className="rounded-2xl bg-emerald-50 px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate font-black">{word.word}</p>
                    <span className="shrink-0 rounded-full bg-white px-2 py-1 text-xs font-bold text-emerald-700">
                      {STATUS_LABELS[progress.status]}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-xs font-bold text-emerald-700">
                    {word.chineseDefinition}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </details>
  );
}

function TopicOption({
  selectedTopicId,
  setSelectedTopicId,
  topic,
  topicSummaries,
}: {
  selectedTopicId: string;
  setSelectedTopicId: (value: string) => void;
  topic: (typeof TOPICS)[number];
  topicSummaries: ReturnType<typeof getTopicSummaries>;
}) {
  const summary = topicSummaries.find((item) => item.topicId === topic.id);
  const percent = summary ? Math.round((summary.mastered / summary.total) * 100) : 0;

  return (
    <button
      type="button"
      onClick={() => setSelectedTopicId(topic.id)}
      className={`w-full rounded-2xl border-2 p-3 text-left transition ${
        selectedTopicId === topic.id
          ? "border-emerald-500 bg-emerald-100"
          : "border-emerald-900/10 bg-white hover:border-emerald-300"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-black">{topic.titleZh}</p>
          <p className="mt-1 text-xs font-bold text-emerald-700/75">
            {topic.titleEn} · No.{topic.rangeStart}-{topic.rangeEnd}
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-black text-emerald-700">
          {percent}%
        </span>
      </div>
    </button>
  );
}

function buildChoiceOptions(
  currentWord: WordEntry,
  pool: WordEntry[],
  studyMode: StudyMode
): string[] {
  const correctValue =
    studyMode === "choice-en-zh"
      ? currentWord.chineseDefinition
      : currentWord.word;
  const sameTopic = pool.filter(
    (word) => word.topicId === currentWord.topicId && word.id !== currentWord.id
  );
  const fallback = WORD_ENTRIES.filter((word) => word.id !== currentWord.id);
  const candidates = sameTopic.length >= 3 ? sameTopic : fallback;
  const distractors = candidates
    .slice()
    .sort((a, b) => Math.abs(a.no - currentWord.no) - Math.abs(b.no - currentWord.no))
    .slice(0, 3)
    .map((word) =>
      studyMode === "choice-en-zh" ? word.chineseDefinition : word.word
    );

  return [correctValue, ...distractors].sort((a, b) =>
    zhCollator.compare(a, b)
  );
}

function buildExampleSentences(word: WordEntry): string[] {
  const article = /^[aeiou]/i.test(word.word) ? "an" : "a";

  return [
    `In a code review, the team discussed how ${article} ${word.word} relates to ${word.englishDefinition.toLowerCase()}.`,
  ];
}

function getWordTitleFontSize(word: string): string {
  const length = word.length;

  if (length <= 8) {
    return "clamp(4rem, 6.6vw, 5.6rem)";
  }

  if (length <= 12) {
    return "clamp(3.3rem, 5.2vw, 4.7rem)";
  }

  if (length <= 16) {
    return "clamp(2.8rem, 4.2vw, 3.8rem)";
  }

  return "clamp(2.1rem, 3.2vw, 3rem)";
}

function buildWordExpansion(word: WordEntry): WordExpansion {
  const curated = WORD_EXPANSIONS[word.word.toLowerCase()];
  const baseForms = buildWordForms(word.word);

  return {
    synonyms: curated?.synonyms ?? buildRelatedWords(word, "synonyms"),
    antonyms: curated?.antonyms ?? buildRelatedWords(word, "antonyms"),
    forms: curated?.forms ?? baseForms,
    collocations:
      curated?.collocations ??
      [`${word.word} value`, `${word.word} name`, `define ${word.word}`],
  };
}

function buildRelatedWords(
  word: WordEntry,
  kind: "synonyms" | "antonyms"
): string[] {
  if (kind === "synonyms") {
    return [
      word.englishDefinition.split(" ").slice(0, 2).join(" "),
      `${word.word} concept`,
    ];
  }

  return [`non-${word.word}`, `mutable ${word.word}`];
}

function buildWordForms(word: string): string[] {
  const lower = word.toLowerCase();

  if (lower.endsWith("e")) {
    return [word, `${word}d`, `${word.slice(0, -1)}ing`];
  }

  if (lower.endsWith("y")) {
    return [word, `${word.slice(0, -1)}ies`, `${word.slice(0, -1)}ied`];
  }

  return [word, `${word}s`, `${word}ed`];
}

const WORD_EXPANSIONS: Record<string, WordExpansion> = {
  variable: {
    synonyms: ["identifier", "symbol", "named value"],
    antonyms: ["constant", "literal", "fixed value"],
    forms: ["variable", "variables", "vary", "variant"],
    collocations: ["declare a variable", "assign a variable", "local variable"],
  },
  constant: {
    synonyms: ["fixed value", "immutable value", "literal"],
    antonyms: ["variable", "mutable value", "dynamic value"],
    forms: ["constant", "constants", "const", "constant value"],
    collocations: ["define a constant", "constant value", "compile-time constant"],
  },
  function: {
    synonyms: ["method", "routine", "procedure"],
    antonyms: ["caller", "inline code", "script body"],
    forms: ["function", "functions", "functional", "function call"],
    collocations: ["call a function", "define a function", "pure function"],
  },
  parameter: {
    synonyms: ["input", "argument slot", "formal argument"],
    antonyms: ["return value", "argument", "output"],
    forms: ["parameter", "parameters", "parameterize", "parameterized"],
    collocations: ["function parameter", "optional parameter", "parameter list"],
  },
  argument: {
    synonyms: ["actual value", "input value", "passed value"],
    antonyms: ["parameter", "return value", "default value"],
    forms: ["argument", "arguments", "arg", "argument list"],
    collocations: ["pass an argument", "argument list", "command-line argument"],
  },
  return: {
    synonyms: ["send back", "output", "yield"],
    antonyms: ["receive", "input", "throw"],
    forms: ["return", "returns", "returned", "returning"],
    collocations: ["return a value", "return type", "early return"],
  },
  loop: {
    synonyms: ["iteration", "cycle", "repetition"],
    antonyms: ["single pass", "break", "exit"],
    forms: ["loop", "loops", "looped", "looping"],
    collocations: ["for loop", "while loop", "infinite loop"],
  },
  condition: {
    synonyms: ["predicate", "test", "boolean expression"],
    antonyms: ["unconditional", "always true", "always false"],
    forms: ["condition", "conditions", "conditional", "conditioned"],
    collocations: ["if condition", "condition check", "race condition"],
  },
};

