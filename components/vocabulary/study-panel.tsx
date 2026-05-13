import * as React from "react";

import { toast } from "sonner";

import {
  buildWordExpansion,
  getMaxWordTitleFontSize,
} from "@/lib/learning/vocabulary-content";
import { STATUS_LABELS } from "@/components/vocabulary/constants";

import type { StudyMode, Topic, WordEntry, WordProgress } from "@/types/vocabulary-types";
import type { WordExpansion } from "@/lib/learning/vocabulary-content";
import type { AttemptResult } from "@/components/vocabulary/types";

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

export function StudyPanel({
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
  activeTopic?: Topic;
  attempts: AttemptResult[];
  choiceOptions: string[];
  correctAttempts: number;
  currentIndex: number;
  currentProgress?: WordProgress;
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
  const wordTitleRef = React.useRef<HTMLHeadingElement>(null);
  const [wordTitleFontSize, setWordTitleFontSize] = React.useState(() =>
    getMaxWordTitleFontSize(currentWord.word)
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

  React.useEffect(() => {
    const titleEl = wordTitleRef.current;
    const containerEl = titleEl?.parentElement;

    if (!titleEl || !containerEl) {
      return;
    }

    const fitTitle = () => {
      const maxFontSize = getMaxWordTitleFontSize(currentWord.word);
      let low = 1.2;
      let high = maxFontSize;

      for (let index = 0; index < 12; index += 1) {
        const mid = (low + high) / 2;
        titleEl.style.fontSize = `${mid}rem`;

        if (titleEl.scrollWidth <= containerEl.clientWidth) {
          low = mid;
        } else {
          high = mid;
        }
      }

      setWordTitleFontSize(Number(low.toFixed(3)));
    };

    fitTitle();

    const resizeObserver = new ResizeObserver(fitTitle);
    resizeObserver.observe(containerEl);

    return () => resizeObserver.disconnect();
  }, [currentWord.word]);

  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border-2 border-emerald-900/10 bg-white p-5">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime-200" />
      <div className="absolute -bottom-12 left-10 h-24 w-24 rounded-full bg-emerald-100" />
      <div className="relative">
        <div className="grid gap-4 xl:grid-cols-[minmax(420px,1.15fr)_minmax(0,0.85fr)]">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
              Current Word
            </p>
            <h2
              ref={wordTitleRef}
              className="mt-2 max-w-full whitespace-nowrap font-extrabold leading-none text-emerald-950"
              style={{ fontSize: `${wordTitleFontSize}rem` }}
            >
              {currentWord.word}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <p className="text-lg font-bold text-emerald-700">
                {currentWord.phonetic}
              </p>
              <SpeakButton
                label={`朗读单词 ${currentWord.word}`}
                onClick={() => handleSpeak(currentWord.word)}
              />
            </div>
          </div>

          <div className="min-w-0 rounded-[1.5rem] border-2 border-emerald-900/10 bg-[#fffdf4] p-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <div className="min-w-0 flex-1 rounded-2xl bg-emerald-50 px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
                    中文释义
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    {showAnswer ? currentWord.chineseDefinition : "先想一想"}
                  </p>
                </div>

                {studyMode === "flashcard" && (
                  <div className="shrink-0 sm:w-52">
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
                )}
              </div>

              <div className="rounded-2xl bg-lime-50 px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
                  English Meaning
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-emerald-900">
                  {showAnswer
                    ? currentWord.englishDefinition
                    : "Reveal the meaning when you are ready."}
                </p>
              </div>

              {studyMode !== "flashcard" && (
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
              )}
            </div>
          </div>
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
    <div className="h-full rounded-2xl bg-white/80 p-3 shadow-[0_3px_0_rgba(20,83,45,0.08)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        {studyMode === "flashcard" &&
          (!revealed ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-[0_5px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              显示释义
            </button>
          ) : (
            <div className="grid w-full grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleMarkUnfamiliar}
                disabled={currentWordMarkedWrong}
                className="rounded-2xl border-2 border-rose-200 bg-rose-50 px-4 py-3 text-sm font-black text-rose-700 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {currentWordMarkedWrong ? "已标记" : "还不熟"}
              </button>
              <button
                type="button"
                onClick={() => handleRecordAnswer(true)}
                className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white shadow-[0_5px_0_rgba(20,83,45,0.35)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                记住了
              </button>
            </div>
          ))}
      </div>

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

