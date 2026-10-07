import "./PerformanceChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { activityData } from "../data/dashboardData";

export function PerformanceChart() {
  return (
    <section className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Calls handled</h2>
          <p>Daily call volume this week</p>
        </div>
        <span className="chart-period">This week</span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityData} margin={{ top: 12, right: 12, left: -12, bottom: 4 }} accessibilityLayer>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#edeef4"
              vertical={false}
            />

            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#858699", fontSize: 11 }} tickMargin={12} />

            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#858699", fontSize: 11 }} tickMargin={8} allowDecimals={false} width={44} />

            <Tooltip
              cursor={{ stroke: "#d9d1f5", strokeDasharray: "4 4" }}
              contentStyle={{ borderRadius: 12, border: "1px solid #ececf2", boxShadow: "0 8px 24px rgba(30, 24, 60, 0.08)", fontSize: 12, padding: "10px 14px" }}
              labelStyle={{ color: "#737487", marginBottom: 4 }}
            />

            <Line
              type="monotone"
              dataKey="calls"
              name="Calls handled"
              stroke="#6d4aff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: "#6d4aff", stroke: "#fff", strokeWidth: 3 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
