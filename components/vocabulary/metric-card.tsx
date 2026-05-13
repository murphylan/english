export function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border-2 border-emerald-900/10 bg-white px-3 py-2 shadow-[0_4px_0_rgba(20,83,45,0.08)]">
      <p className="text-xl font-black text-emerald-700">{value}</p>
      <p className="text-[11px] font-bold text-emerald-700/70">{label}</p>
    </div>
  );
}

