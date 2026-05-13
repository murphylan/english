"use client";

// 1. React
import * as React from "react";

// 3. Third-party
import { Toaster, toast } from "sonner";

// 6. Hooks
import { useVocabularyProgress } from "@/hooks/use-vocabulary-progress";

// 7. Types
import type { StudyMode, WordEntry } from "@/types/vocabulary-types";
import type { AttemptResult } from "@/components/vocabulary/types";

import {
  getProgress,
  getTopicSummaries,
  normalizeAnswer,
  selectSessionWords,
} from "@/lib/learning/progress";
import { TOPICS, WORD_ENTRIES } from "@/lib/mock-data/vocabulary";
import { HiddenLearningTools } from "@/components/vocabulary/learning-tools";
import { MetricCard } from "@/components/vocabulary/metric-card";
import { StudyPanel } from "@/components/vocabulary/study-panel";
import {
  buildChoiceOptions,
  buildExampleSentences,
} from "@/lib/learning/vocabulary-content";

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
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-2.5 px-2.5 py-2.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="pointer-events-none absolute left-8 top-10 h-28 w-28 rounded-full bg-white/45 blur-2xl" />
        <div className="pointer-events-none absolute right-8 top-20 h-40 w-40 rounded-full bg-lime-200/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl" />

        <header className="relative rounded-[1.35rem] border-2 border-emerald-900/10 bg-[#fff9e8] px-3 py-2 shadow-[0_6px_0_rgba(20,83,45,0.1)] sm:rounded-[1.75rem] sm:border-[3px] sm:px-6 sm:py-3 sm:shadow-[0_7px_0_rgba(20,83,45,0.1)]">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase leading-none tracking-[0.35em] text-emerald-700 sm:text-xs">
                Spring Academy
              </p>
              <h1 className="mt-0.5 text-lg font-black leading-tight tracking-tight text-emerald-950 sm:mt-1 sm:text-4xl">
                技术英语记忆训练器
              </h1>
              <p className="mt-0.5 truncate text-[11px] font-bold text-emerald-800 sm:mt-1 sm:text-sm">
                当前目标：看清一个单词、理解一个场景、完成一次反馈。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center sm:min-w-72 sm:gap-2">
              <MetricCard label="已掌握" value={masteredCount} />
              <MetricCard label="待复习" value={dueCount} />
              <MetricCard label="已答题" value={totalAnswered} />
            </div>
          </div>
        </header>

        <section className="relative flex flex-1 flex-col gap-2.5 sm:gap-4">
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

          <footer className="relative rounded-[1.25rem] border-2 border-emerald-900/10 bg-[#fff9e8]/70 px-3 py-2 text-center shadow-[0_4px_0_rgba(20,83,45,0.08)] sm:rounded-[1.75rem] sm:border-4 sm:px-5 sm:py-4 sm:shadow-[0_8px_0_rgba(20,83,45,0.08)]">
            <p className="text-xs font-bold text-emerald-800 sm:text-sm">
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
