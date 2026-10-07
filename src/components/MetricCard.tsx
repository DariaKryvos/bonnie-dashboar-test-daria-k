import type { LucideIcon }  from "lucide-react";
import "./MetricCard.css";

type MetricCardProps = {
  title: string;
  value: string;
  change?: string;
  highlight?: boolean;
  icon: LucideIcon;
};

export function MetricCard({ title, value, change, highlight = false, icon: Icon }: MetricCardProps) {
  return (
    <article className={`metric-card ${highlight ? "highlight" : ""}`}>
      <div className="metric-header">
        <div className="metric-icon">
          <Icon size={18} />
        </div>
        <p className="metric-title">
          {title}
        </p>
      </div>
      <h2 className="metric-value">
        {value}
      </h2>
       {change && (
        <p className="metric-change">
          {change} vs previous period
        </p>
      )}
    </article>
  );
}