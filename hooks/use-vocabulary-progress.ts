"use client";

import * as React from "react";

import type { StudyMode, WordProgress } from "@/types/vocabulary-types";
import {
  getProgress,
  markWordMastered,
  updateProgressAfterAnswer,
} from "@/lib/learning/progress";
import {
  getPersistentItem,
  removePersistentItem,
  setPersistentItem,
} from "@/lib/client/persistent-storage";

const PROGRESS_STORAGE_KEY = "technical-english-progress-v1";

export function useVocabularyProgress() {
  // 1. State
  const [progressByWordId, setProgressByWordId] = React.useState<
    Record<string, WordProgress>
  >({});
  const [initialized, setInitialized] = React.useState(false);

  // 2. Effects
  React.useEffect(() => {
    let cancelled = false;

    void getPersistentItem<Record<string, WordProgress>>(
      PROGRESS_STORAGE_KEY,
    ).then((saved) => {
      if (cancelled) {
        return;
      }

      if (saved) {
        setProgressByWordId(saved);
      }

      setInitialized(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (!initialized) {
      return;
    }

    setPersistentItem(PROGRESS_STORAGE_KEY, progressByWordId);
  }, [initialized, progressByWordId]);

  // 3. Callbacks
  const recordAnswer = React.useCallback(
    (wordId: string, mode: StudyMode, correct: boolean) => {
      setProgressByWordId((current) => {
        const progress = getProgress(current, wordId);
        const nextProgressByWordId = {
          ...current,
          [wordId]: updateProgressAfterAnswer(progress, correct, mode),
        };

        setPersistentItem(PROGRESS_STORAGE_KEY, nextProgressByWordId);

        return nextProgressByWordId;
      });
    },
    [],
  );

  const markMastered = React.useCallback((wordId: string) => {
    setProgressByWordId((current) => {
      const progress = getProgress(current, wordId);
      const nextProgressByWordId = {
        ...current,
        [wordId]: markWordMastered(progress),
      };

      setPersistentItem(PROGRESS_STORAGE_KEY, nextProgressByWordId);

      return nextProgressByWordId;
    });
  }, []);

  const resetProgress = React.useCallback(() => {
    setProgressByWordId({});
    removePersistentItem(PROGRESS_STORAGE_KEY);
  }, []);

  return {
    initialized,
    progressByWordId,
    recordAnswer,
    markMastered,
    resetProgress,
  };
}
