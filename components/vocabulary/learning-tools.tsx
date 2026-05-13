import { STUDY_MODES, getProgress } from "@/lib/learning/progress";
import { TOPICS } from "@/lib/mock-data/vocabulary";
import { STATUS_LABELS } from "@/components/vocabulary/constants";

import type {
  StudyMode,
  Topic,
  TopicProgressSummary,
  WordEntry,
  WordProgress,
} from "@/types/vocabulary-types";

export function HiddenLearningTools({
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
  progressByWordId: Record<string, WordProgress>;
  selectedTopicId: string;
  setBatchSize: (value: number) => void;
  setSelectedTopicId: (value: string) => void;
  setStudyMode: (value: StudyMode) => void;
  studyMode: StudyMode;
  topicSummaries: TopicProgressSummary[];
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
  topic: Topic;
  topicSummaries: TopicProgressSummary[];
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

