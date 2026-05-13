import type { WordEntry } from "@/types/vocabulary-types";
import { FUNDAMENTALS_WORD_ENTRIES } from "./fundamentals";
import { OOP_WORD_ENTRIES } from "./oop";
import { STRUCTURES_ALGORITHMS_WORD_ENTRIES } from "./structures-algorithms";
import { FRONTEND_DEVELOPMENT_WORD_ENTRIES } from "./frontend-development";
import { DEVELOPMENT_WORD_ENTRIES } from "./development";
import { DATABASE_WORD_ENTRIES } from "./database";
import { CI_CD_WORD_ENTRIES } from "./ci-cd";
import { CONTROL_WORD_ENTRIES } from "./control";
import { COMPUTING_WORD_ENTRIES } from "./computing";
import { TESTING_WORD_ENTRIES } from "./testing";
import { SECURITY_WORD_ENTRIES } from "./security";
import { MANAGEMENT_AGILE_WORD_ENTRIES } from "./management-agile";
import { AI_MACHINE_LEARNING_WORD_ENTRIES } from "./ai-machine-learning";
import { UI_UX_DESIGN_WORD_ENTRIES } from "./ui-ux-design";
import { COMMUNICATION_WORKPLACE_WORD_ENTRIES } from "./communication-workplace";
import { PERFORMANCE_WORD_ENTRIES } from "./performance";

export { TOPICS } from "./topics";
export { FUNDAMENTALS_WORD_ENTRIES } from "./fundamentals";
export { OOP_WORD_ENTRIES } from "./oop";
export { STRUCTURES_ALGORITHMS_WORD_ENTRIES } from "./structures-algorithms";
export { FRONTEND_DEVELOPMENT_WORD_ENTRIES } from "./frontend-development";
export { DEVELOPMENT_WORD_ENTRIES } from "./development";
export { DATABASE_WORD_ENTRIES } from "./database";
export { CI_CD_WORD_ENTRIES } from "./ci-cd";
export { CONTROL_WORD_ENTRIES } from "./control";
export { COMPUTING_WORD_ENTRIES } from "./computing";
export { TESTING_WORD_ENTRIES } from "./testing";
export { SECURITY_WORD_ENTRIES } from "./security";
export { MANAGEMENT_AGILE_WORD_ENTRIES } from "./management-agile";
export { AI_MACHINE_LEARNING_WORD_ENTRIES } from "./ai-machine-learning";
export { UI_UX_DESIGN_WORD_ENTRIES } from "./ui-ux-design";
export { COMMUNICATION_WORKPLACE_WORD_ENTRIES } from "./communication-workplace";
export { PERFORMANCE_WORD_ENTRIES } from "./performance";

export const WORD_ENTRIES: WordEntry[] = [
  ...FUNDAMENTALS_WORD_ENTRIES,
  ...OOP_WORD_ENTRIES,
  ...STRUCTURES_ALGORITHMS_WORD_ENTRIES,
  ...FRONTEND_DEVELOPMENT_WORD_ENTRIES,
  ...DEVELOPMENT_WORD_ENTRIES,
  ...DATABASE_WORD_ENTRIES,
  ...CI_CD_WORD_ENTRIES,
  ...CONTROL_WORD_ENTRIES,
  ...COMPUTING_WORD_ENTRIES,
  ...TESTING_WORD_ENTRIES,
  ...SECURITY_WORD_ENTRIES,
  ...MANAGEMENT_AGILE_WORD_ENTRIES,
  ...AI_MACHINE_LEARNING_WORD_ENTRIES,
  ...UI_UX_DESIGN_WORD_ENTRIES,
  ...COMMUNICATION_WORKPLACE_WORD_ENTRIES,
  ...PERFORMANCE_WORD_ENTRIES,
];
