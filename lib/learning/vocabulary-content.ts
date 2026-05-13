import { WORD_ENTRIES } from "@/lib/mock-data/vocabulary";

import type { StudyMode, WordEntry } from "@/types/vocabulary-types";

export interface WordExpansion {
  synonyms: string[];
  antonyms: string[];
  forms: string[];
  collocations: string[];
}

const zhCollator = new Intl.Collator("zh-CN");

export function buildChoiceOptions(
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

export function buildExampleSentences(word: WordEntry): string[] {
  if (word.exampleSentences?.length) {
    return word.exampleSentences;
  }

  return ["This word needs a dedicated example sentence in the vocabulary data."];
}

export function getMaxWordTitleFontSize(word: string): number {
  const length = word.length;

  if (length <= 6) {
    return 5.05;
  }

  if (length <= 8) {
    return 4.65;
  }

  if (length <= 12) {
    return 3.9;
  }

  if (length <= 16) {
    return 3.2;
  }

  return 2.55;
}

export function buildWordExpansion(word: WordEntry): WordExpansion {
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
