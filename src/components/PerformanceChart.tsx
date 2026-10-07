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
          <p>Calls and reservations this week</p>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityData}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calls"
              stroke="#6d4aff"
              strokeWidth={2}
            />

            {/* <Line
              type="monotone"
              dataKey="reservations"
              stroke="#16a34a"
              strokeWidth={2}
            /> */}

          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
