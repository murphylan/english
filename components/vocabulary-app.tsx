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
  getPersistentItem,
  removePersistentItem,
  setPersistentItem,
} from "@/lib/client/persistent-storage";
import {
  getProgress,
  getTopicSummaries,
  normalizeAnswer,
  selectSessionWords,
} from "@/lib/learning/progress";
import { TOPICS, WORD_ENTRIES } from "@/lib/mock-data/vocabulary";
import { ClearanceMap } from "@/components/vocabulary/clearance-map";
import { LearningSettings } from "@/components/vocabulary/learning-tools";
import { MetricCard } from "@/components/vocabulary/metric-card";
import { StudyPanel } from "@/components/vocabulary/study-panel";
import {
  buildChoiceOptions,
  buildExampleSentences,
} from "@/lib/learning/vocabulary-content";

const SESSION_STORAGE_KEY = "technical-english-session-v1";
const STUDY_MODE_IDS = [
  "flashcard",
  "choice-en-zh",
  "choice-zh-en",
  "spelling",
  "scenario",
] as const;

interface SavedVocabularySession {
  version: 1;
  selectedTopicId: string;
  studyMode: StudyMode;
  batchSize: number;
  wordIds: string[];
  currentIndex: number;
  revealed: boolean;
  selectedOption: string;
  typedAnswer: string;
  attempts: AttemptResult[];
  updatedAt: string;
}

function isStudyMode(value: string): value is StudyMode {
  return STUDY_MODE_IDS.includes(value as StudyMode);
}

function restoreSessionWords(wordIds: string[]): WordEntry[] {
  const wordsById = new Map(WORD_ENTRIES.map((word) => [word.id, word]));

  return wordIds
    .map((wordId) => wordsById.get(wordId))
    .filter((word): word is WordEntry => Boolean(word));
}

export function VocabularyApp() {
  // 1. Hooks
  const {
    initialized,
    progressByWordId,
    recordAnswer,
    markMastered,
    resetProgress,
  } = useVocabularyProgress();

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
  const [sessionRestored, setSessionRestored] = React.useState(false);
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
    [progressByWordId],
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
    [currentWord],
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

  const accuracy = React.useMemo(() => {
    let correct = 0;
    let answered = 0;

    for (const progress of Object.values(progressByWordId)) {
      correct += progress.correctCount;
      answered += progress.correctCount + progress.wrongCount;
    }

    return answered === 0 ? 0 : Math.round((correct / answered) * 100);
  }, [progressByWordId]);

  const masteredCount = React.useMemo(
    () =>
      Object.values(progressByWordId).filter(
        (progress) => progress.status === "mastered",
      ).length,
    [progressByWordId],
  );

  const statusCounts = React.useMemo(() => {
    const counts = { new: 0, learning: 0, reviewing: 0, mastered: 0 };

    for (const word of WORD_ENTRIES) {
      counts[getProgress(progressByWordId, word.id).status] += 1;
    }

    return counts;
  }, [progressByWordId]);

  const dueCount = React.useMemo(() => {
    const now = Date.now();

    return WORD_ENTRIES.filter((word) => {
      const progress = getProgress(progressByWordId, word.id);

      return progress.status !== "new" && Date.parse(progress.dueAt) <= now;
    }).length;
  }, [progressByWordId]);

  const clearedPercent =
    WORD_ENTRIES.length === 0
      ? 0
      : Math.round((masteredCount / WORD_ENTRIES.length) * 100);

  const correctAttempts = attempts.filter((attempt) => attempt.correct).length;
  const currentWordMarkedWrong = currentWord
    ? attempts.some(
        (attempt) => attempt.wordId === currentWord.id && !attempt.correct,
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
        batchSize,
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
    [batchSize, filteredWords, progressByWordId],
  );

  const handleEnterLevel = React.useCallback(
    (topicId: string) => {
      const topicWords = WORD_ENTRIES.filter(
        (word) => word.topicId === topicId,
      );
      const selectedWords = selectSessionWords(
        topicWords,
        progressByWordId,
        batchSize,
      );

      setSelectedTopicId(topicId);
      setSessionWords(selectedWords);
      setCurrentIndex(0);
      setRevealed(false);
      setSelectedOption("");
      setTypedAnswer("");
      setAttempts([]);

      const topic = TOPICS.find((item) => item.id === topicId);

      if (selectedWords.length === 0) {
        toast.error("这一关暂时没有可练习的单词");
      } else {
        toast.success(
          `进入「${topic?.orderLabel ?? "本关"}」· ${selectedWords.length} 个词`,
        );
      }
    },
    [batchSize, progressByWordId],
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
    [currentWord, recordAnswer, studyMode],
  );

  const handleMarkMastered = React.useCallback(() => {
    if (!currentWord) {
      return;
    }

    markMastered(currentWord.id);
    setAttempts((current) => [
      ...current,
      { wordId: currentWord.id, correct: true },
    ]);
    setCurrentIndex((index) => index + 1);
    setRevealed(false);
    setSelectedOption("");
    setTypedAnswer("");
  }, [currentWord, markMastered]);

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
    [sessionWords.length],
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
        correct ? "答对了" : `正确答案：${correctAnswer}`,
      );
      window.setTimeout(() => handleRecordAnswer(correct), 350);
    },
    [currentWord, handleRecordAnswer, studyMode],
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
        correct ? "拼写正确" : `正确拼写：${currentWord.word}`,
      );
      handleRecordAnswer(correct);
    },
    [currentWord, handleRecordAnswer, typedAnswer],
  );

  const handleResetProgress = React.useCallback(() => {
    resetProgress();
    setSessionWords([]);
    setCurrentIndex(0);
    setAttempts([]);
    removePersistentItem(SESSION_STORAGE_KEY);
    autoStartedRef.current = false;
    toast.success("学习进度已重置");
  }, [resetProgress]);

  // 5. Effects
  React.useEffect(() => {
    let cancelled = false;

    void getPersistentItem<SavedVocabularySession>(SESSION_STORAGE_KEY).then(
      (saved) => {
        if (cancelled) {
          return;
        }

        if (saved && saved.version === 1 && isStudyMode(saved.studyMode)) {
          const restoredWords = restoreSessionWords(
            Array.isArray(saved.wordIds) ? saved.wordIds : [],
          );
          const batchSizeToRestore =
            Number.isFinite(saved.batchSize) && saved.batchSize > 0
              ? saved.batchSize
              : 10;
          const currentIndexToRestore = Number.isFinite(saved.currentIndex)
            ? saved.currentIndex
            : 0;

          setSelectedTopicId(saved.selectedTopicId || "all");
          setStudyMode(saved.studyMode);
          setBatchSize(batchSizeToRestore);
          setSessionWords(restoredWords);
          setCurrentIndex(
            Math.min(Math.max(0, currentIndexToRestore), restoredWords.length),
          );
          setRevealed(Boolean(saved.revealed));
          setSelectedOption(saved.selectedOption || "");
          setTypedAnswer(saved.typedAnswer || "");
          setAttempts(Array.isArray(saved.attempts) ? saved.attempts : []);
        }

        setSessionRestored(true);
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (!initialized || !sessionRestored) {
      return;
    }

    if (sessionWords.length === 0) {
      removePersistentItem(SESSION_STORAGE_KEY);
      return;
    }

    setPersistentItem<SavedVocabularySession>(SESSION_STORAGE_KEY, {
      version: 1,
      selectedTopicId,
      studyMode,
      batchSize,
      wordIds: sessionWords.map((word) => word.id),
      currentIndex,
      revealed,
      selectedOption,
      typedAnswer,
      attempts,
      updatedAt: new Date().toISOString(),
    });
  }, [
    attempts,
    batchSize,
    currentIndex,
    initialized,
    revealed,
    selectedOption,
    selectedTopicId,
    sessionRestored,
    sessionWords,
    studyMode,
    typedAnswer,
  ]);

  React.useEffect(() => {
    if (!initialized || !sessionRestored || autoStartedRef.current) {
      return;
    }

    autoStartedRef.current = true;
    if (sessionWords.length > 0) {
      return;
    }

    handleStartSession(false);
  }, [handleStartSession, initialized, sessionRestored, sessionWords.length]);

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
                IT英语记忆训练器
              </h1>
              <p className="mt-0.5 truncate text-[11px] font-bold text-emerald-800 sm:mt-1 sm:text-sm">
                当前目标：看清一个单词、理解一个场景、完成一次反馈。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center sm:min-w-72 sm:gap-2">
              <MetricCard label="已掌握" value={masteredCount} />
              <MetricCard label="待复习" value={dueCount} />
              <MetricCard label="正确率" value={`${accuracy}%`} />
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
            handleMarkMastered={handleMarkMastered}
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

          <details className="rounded-[2rem] border-4 border-emerald-900/10 bg-white/70 p-4 shadow-[0_12px_0_rgba(20,83,45,0.08)] backdrop-blur sm:p-5">
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-lg font-black marker:text-emerald-700">
              <span>
                通关之路
                <span className="ml-2 text-sm font-bold text-emerald-700">
                  闯关地图 · 学习设置
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-emerald-600 px-3 py-1 text-sm font-black text-white">
                通关 {clearedPercent}%
              </span>
            </summary>

            <div className="mt-4 grid gap-4 [&>*]:min-w-0">
              <ClearanceMap
                dueCount={dueCount}
                masteredCount={masteredCount}
                onEnterLevel={handleEnterLevel}
                selectedTopicId={selectedTopicId}
                statusCounts={statusCounts}
                topicSummaries={topicSummaries}
                totalWords={WORD_ENTRIES.length}
              />
              <LearningSettings
                batchSize={batchSize}
                handleResetProgress={handleResetProgress}
                handleStartSession={() => handleStartSession()}
                initialized={initialized}
                selectedTopicId={selectedTopicId}
                setBatchSize={setBatchSize}
                setSelectedTopicId={setSelectedTopicId}
                setStudyMode={setStudyMode}
                studyMode={studyMode}
              />
            </div>
          </details>

          <footer className="relative py-1 text-center sm:py-2">
            <p className="text-[11px] font-bold text-emerald-700/60 sm:text-xs sm:text-emerald-700/65">
              Spring Academy ·{" "}
              <a
                href="https://murphylan.cloud"
                target="_blank"
                rel="noreferrer"
                className="font-black text-emerald-800/75 underline decoration-emerald-300/60 underline-offset-4 transition hover:text-emerald-700"
              >
                Murphy Cloud
              </a>
              提供支持
            </p>
          </footer>
        </section>
      </section>
    </main>
  );
}
