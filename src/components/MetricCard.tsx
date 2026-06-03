type MetricCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-surface-elevated p-6 shadow-sm dark:border-slate-800">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
      <p className="mt-3 font-display text-3xl font-semibold text-brand">{value}</p>
      {hint ? <p className="mt-2 text-sm text-brand-muted">{hint}</p> : null}
    </div>
  );
}
