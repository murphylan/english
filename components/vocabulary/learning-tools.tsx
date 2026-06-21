import { STUDY_MODES } from "@/lib/learning/progress";
import { TOPICS } from "@/lib/mock-data/vocabulary";

import type { StudyMode } from "@/types/vocabulary-types";

export function LearningSettings({
  batchSize,
  handleResetProgress,
  handleStartSession,
  initialized,
  selectedTopicId,
  setBatchSize,
  setSelectedTopicId,
  setStudyMode,
  studyMode,
}: {
  batchSize: number;
  handleResetProgress: () => void;
  handleStartSession: () => void;
  initialized: boolean;
  selectedTopicId: string;
  setBatchSize: (value: number) => void;
  setSelectedTopicId: (value: string) => void;
  setStudyMode: (value: StudyMode) => void;
  studyMode: StudyMode;
}) {
  return (
    <>
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

      <section className="rounded-[1.5rem] bg-white p-4">
        <h3 className="text-sm font-black text-emerald-900">训练模式</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
