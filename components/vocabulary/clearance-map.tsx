import { TOPICS } from "@/lib/mock-data/vocabulary";

import type {
  ProgressStatus,
  TopicProgressSummary,
} from "@/types/vocabulary-types";

type StatusCounts = Record<ProgressStatus, number>;

const SEGMENTS: Array<{
  key: ProgressStatus;
  label: string;
  className: string;
  dotClassName: string;
}> = [
  {
    key: "mastered",
    label: "已掌握",
    className: "bg-emerald-600",
    dotClassName: "bg-emerald-600",
  },
  {
    key: "reviewing",
    label: "复习中",
    className: "bg-emerald-400",
    dotClassName: "bg-emerald-400",
  },
  {
    key: "learning",
    label: "学习中",
    className: "bg-lime-400",
    dotClassName: "bg-lime-400",
  },
  {
    key: "new",
    label: "未学",
    className: "bg-emerald-900/10",
    dotClassName: "bg-emerald-900/20",
  },
];

export function ClearanceMap({
  dueCount,
  masteredCount,
  onEnterLevel,
  selectedTopicId,
  statusCounts,
  topicSummaries,
  totalWords,
}: {
  dueCount: number;
  masteredCount: number;
  onEnterLevel: (topicId: string) => void;
  selectedTopicId: string;
  statusCounts: StatusCounts;
  topicSummaries: TopicProgressSummary[];
  totalWords: number;
}) {
  const remaining = Math.max(0, totalWords - masteredCount);

  // 当前关卡 = 第一个尚未完全掌握的主题。
  const fallbackTopicId = TOPICS.find((topic) => {
    const summary = topicSummaries.find((item) => item.topicId === topic.id);

    return !summary || summary.mastered < summary.total;
  })?.id;

  // 高亮跟随用户切换的章节；未指定具体章节（"all"）时回退到自动推断的当前关卡。
  // selectedTopicId 已持久化到本地，因此高亮在刷新后依旧固化。
  const activeTopicId =
    selectedTopicId !== "all" ? selectedTopicId : fallbackTopicId;

  return (
    <>
      <section className="rounded-[1.5rem] bg-white p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-black text-emerald-900">总体进度</h3>
          <p className="text-xs font-bold text-emerald-700">
            距离通关还差 {remaining} 词 · 今日待复习 {dueCount} 个
          </p>
        </div>

        <div className="mt-3 flex h-4 w-full overflow-hidden rounded-full bg-emerald-900/5">
          {SEGMENTS.map((segment) => {
            const count = statusCounts[segment.key];
            const width = totalWords === 0 ? 0 : (count / totalWords) * 100;

            if (width === 0) {
              return null;
            }

            return (
              <div
                key={segment.key}
                className={segment.className}
                style={{ width: `${width}%` }}
                title={`${segment.label} ${count}`}
              />
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {SEGMENTS.map((segment) => (
            <span
              key={segment.key}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${segment.dotClassName}`}
              />
              {segment.label} {statusCounts[segment.key]}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-[1.5rem] bg-white p-4">
        <h3 className="text-sm font-black text-emerald-900">
          闯关地图：{TOPICS.length} 关
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic, index) => {
            const summary = topicSummaries.find(
              (item) => item.topicId === topic.id,
            );
            const total = summary?.total ?? 0;
            const mastered = summary?.mastered ?? 0;
            const percent =
              total === 0 ? 0 : Math.round((mastered / total) * 100);
            const cleared = total > 0 && mastered >= total;
            const isCurrent = topic.id === activeTopicId;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => onEnterLevel(topic.id)}
                className={`w-full rounded-2xl border-2 p-3 text-left transition hover:-translate-y-0.5 ${
                  cleared
                    ? "border-emerald-500 bg-emerald-100"
                    : isCurrent
                      ? "border-emerald-500 bg-white ring-4 ring-emerald-400/30"
                      : "border-emerald-900/10 bg-white hover:border-emerald-300"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] font-black text-emerald-700/70">
                      第 {index + 1} 关
                    </p>
                    <p className="truncate font-black text-emerald-950">
                      {topic.orderLabel}
                    </p>
                    <p className="mt-0.5 truncate text-xs font-bold text-emerald-700/75">
                      {topic.titleEn} · No.{topic.rangeStart}-{topic.rangeEnd}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-1 text-xs font-black ${
                      cleared
                        ? "bg-emerald-600 text-white"
                        : isCurrent
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {cleared
                      ? "已通关 ✅"
                      : isCurrent
                        ? "进行中"
                        : `${percent}%`}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-emerald-900/5">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs font-bold text-emerald-700">
                    {mastered}/{total}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
