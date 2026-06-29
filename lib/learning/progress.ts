import type {
  ProgressStatus,
  StudyMode,
  Topic,
  TopicProgressSummary,
  WordEntry,
  WordProgress,
} from "@/types/vocabulary-types";

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const STUDY_MODES: Array<{
  id: StudyMode;
  label: string;
  description: string;
}> = [
  {
    id: "flashcard",
    label: "词卡",
    description: "先识别英文、音标和双语释义",
  },
  {
    id: "choice-en-zh",
    label: "英选中",
    description: "看到英文，快速选出中文含义",
  },
  {
    id: "choice-zh-en",
    label: "中选英",
    description: "看到中文，反向回忆英文",
  },
  {
    id: "spelling",
    label: "拼写",
    description: "根据释义主动输入英文单词",
  },
  {
    id: "scenario",
    label: "场景题",
    description: "在技术语境里选择合适术语",
  },
];

export function createInitialProgress(wordId: string): WordProgress {
  return {
    wordId,
    status: "new",
    correctCount: 0,
    wrongCount: 0,
    streak: 0,
    ease: 2.5,
    intervalDays: 0,
    dueAt: new Date(0).toISOString(),
  };
}

export function getProgress(
  progressByWordId: Record<string, WordProgress>,
  wordId: string
): WordProgress {
  return progressByWordId[wordId] ?? createInitialProgress(wordId);
}

export function updateProgressAfterAnswer(
  current: WordProgress,
  correct: boolean,
  mode: StudyMode
): WordProgress {
  const now = new Date();
  const effortBonus = mode === "spelling" || mode === "scenario" ? 0.2 : 0;

  if (!correct) {
    const ease = Math.max(1.3, current.ease - 0.25);

    return {
      ...current,
      status: "learning",
      wrongCount: current.wrongCount + 1,
      streak: 0,
      ease,
      intervalDays: 0,
      dueAt: new Date(now.getTime() + 10 * 60 * 1000).toISOString(),
      lastReviewedAt: now.toISOString(),
    };
  }

  const correctCount = current.correctCount + 1;
  const streak = current.streak + 1;
  const ease = Math.min(3.2, current.ease + 0.08 + effortBonus);
  const nextInterval =
    current.intervalDays <= 0
      ? 1
      : Math.max(1, Math.round(current.intervalDays * ease));
  const status = getNextStatus(correctCount, streak, current.wrongCount);

  return {
    ...current,
    status,
    correctCount,
    streak,
    ease,
    intervalDays: nextInterval,
    dueAt: new Date(now.getTime() + nextInterval * DAY_IN_MS).toISOString(),
    lastReviewedAt: now.toISOString(),
  };
}

export function markWordMastered(current: WordProgress): WordProgress {
  const now = new Date();
  const correctCount = current.correctCount + 1;
  const streak = current.streak + 1;
  const ease = Math.min(3.2, current.ease + 0.08);
  // 一键掌握：直接置为 mastered，但仍按间隔复习安排下一次到期时间。
  const intervalDays = Math.max(current.intervalDays, 4);

  return {
    ...current,
    status: "mastered",
    correctCount,
    streak,
    ease,
    intervalDays,
    dueAt: new Date(now.getTime() + intervalDays * DAY_IN_MS).toISOString(),
    lastReviewedAt: now.toISOString(),
  };
}

export function selectSessionWords(
  words: WordEntry[],
  progressByWordId: Record<string, WordProgress>,
  limit: number
): WordEntry[] {
  const now = Date.now();

  return [...words]
    .sort((a, b) => {
      const progressA = getProgress(progressByWordId, a.id);
      const progressB = getProgress(progressByWordId, b.id);
      const scoreA = getReviewPriority(progressA, now);
      const scoreB = getReviewPriority(progressB, now);

      if (scoreA !== scoreB) {
        return scoreB - scoreA;
      }

      return a.no - b.no;
    })
    .slice(0, limit);
}

export function getTopicSummaries(
  topics: Topic[],
  words: WordEntry[],
  progressByWordId: Record<string, WordProgress>
): TopicProgressSummary[] {
  const now = Date.now();

  return topics.map((topic) => {
    const topicWords = words.filter((word) => word.topicId === topic.id);
    const progresses = topicWords.map((word) =>
      getProgress(progressByWordId, word.id)
    );
    const answered = progresses.reduce(
      (sum, progress) => sum + progress.correctCount + progress.wrongCount,
      0
    );
    const correct = progresses.reduce(
      (sum, progress) => sum + progress.correctCount,
      0
    );

    return {
      topicId: topic.id,
      total: topicWords.length,
      mastered: progresses.filter((progress) => progress.status === "mastered")
        .length,
      learning: progresses.filter((progress) => progress.status === "learning")
        .length,
      due: progresses.filter((progress) => Date.parse(progress.dueAt) <= now)
        .length,
      accuracy: answered === 0 ? 0 : Math.round((correct / answered) * 100),
    };
  });
}

export function normalizeAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getNextStatus(
  correctCount: number,
  streak: number,
  wrongCount: number
): ProgressStatus {
  if (correctCount >= 5 && streak >= 3 && wrongCount <= correctCount) {
    return "mastered";
  }

  if (correctCount >= 2 && streak >= 2) {
    return "reviewing";
  }

  return "learning";
}

function getReviewPriority(progress: WordProgress, now: number): number {
  if (progress.status === "new") {
    return 90;
  }

  const dueAt = Date.parse(progress.dueAt);
  const overdueDays = Math.max(0, Math.floor((now - dueAt) / DAY_IN_MS));
  const dueScore = dueAt <= now ? 100 + overdueDays : 0;
  const weaknessScore = progress.wrongCount * 8 - progress.correctCount * 2;

  return dueScore + weaknessScore;
}

