export function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[1rem] border-2 border-emerald-900/10 bg-white px-2 py-1 shadow-[0_2px_0_rgba(20,83,45,0.08)] sm:rounded-2xl sm:px-3 sm:py-2 sm:shadow-[0_3px_0_rgba(20,83,45,0.08)]">
      <p className="text-base font-black leading-none text-emerald-700 sm:text-xl">
        {value}
      </p>
      <p className="mt-0.5 text-[9px] font-bold leading-none text-emerald-700/70 sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}

