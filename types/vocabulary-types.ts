import z from "zod";

export const progressStatusSchema = z.enum([
  "new",
  "learning",
  "reviewing",
  "mastered",
]);

export const studyModeSchema = z.enum([
  "flashcard",
  "choice-en-zh",
  "choice-zh-en",
  "spelling",
  "scenario",
]);

export const wordEntrySchema = z.object({
  id: z.string(),
  no: z.number(),
  topicId: z.string(),
  word: z.string(),
  phonetic: z.string(),
  englishDefinition: z.string(),
  chineseDefinition: z.string(),
});

export const topicSchema = z.object({
  id: z.string(),
  orderLabel: z.string(),
  titleZh: z.string(),
  titleEn: z.string(),
  rangeStart: z.number(),
  rangeEnd: z.number(),
});

export interface WordEntry {
  id: string;
  no: number;
  topicId: string;
  word: string;
  phonetic: string;
  englishDefinition: string;
  chineseDefinition: string;
}

export interface Topic {
  id: string;
  orderLabel: string;
  titleZh: string;
  titleEn: string;
  rangeStart: number;
  rangeEnd: number;
}

export type ProgressStatus = z.infer<typeof progressStatusSchema>;

export type StudyMode = z.infer<typeof studyModeSchema>;

export interface WordProgress {
  wordId: string;
  status: ProgressStatus;
  correctCount: number;
  wrongCount: number;
  streak: number;
  ease: number;
  intervalDays: number;
  dueAt: string;
  lastReviewedAt?: string;
}

export interface TopicProgressSummary {
  topicId: string;
  total: number;
  mastered: number;
  learning: number;
  due: number;
  accuracy: number;
}

export interface AnswerAttempt {
  wordId: string;
  mode: StudyMode;
  correct: boolean;
  answeredAt: string;
}

