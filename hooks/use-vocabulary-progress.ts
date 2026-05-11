"use client";

import * as React from "react";

import type { StudyMode, WordProgress } from "@/types/vocabulary-types";
import {
  getProgress,
  updateProgressAfterAnswer,
} from "@/lib/learning/progress";

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

    queueMicrotask(() => {
      if (cancelled) {
        return;
      }

      try {
        const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (saved) {
          setProgressByWordId(JSON.parse(saved) as Record<string, WordProgress>);
        }
      } catch (error) {
        console.error("Failed to restore vocabulary progress:", error);
      } finally {
        setInitialized(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (!initialized) {
      return;
    }

    try {
      localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify(progressByWordId)
      );
    } catch (error) {
      console.error("Failed to save vocabulary progress:", error);
    }
  }, [initialized, progressByWordId]);

  // 3. Callbacks
  const recordAnswer = React.useCallback(
    (wordId: string, mode: StudyMode, correct: boolean) => {
      setProgressByWordId((current) => {
        const progress = getProgress(current, wordId);

        return {
          ...current,
          [wordId]: updateProgressAfterAnswer(progress, correct, mode),
        };
      });
    },
    []
  );

  const resetProgress = React.useCallback(() => {
    setProgressByWordId({});
    try {
      localStorage.removeItem(PROGRESS_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to reset vocabulary progress:", error);
    }
  }, []);

  return {
    initialized,
    progressByWordId,
    recordAnswer,
    resetProgress,
  };
}

