import "./App.css";
import { lazy, Suspense } from "react";
import { Sidebar } from "./components/Sidebar";
import { MetricCard } from "./components/MetricCard";
import { ActivityList } from "./components/ActivityList";
import { PerformanceSummary } from "./components/PerformanceSummary";
import { AttentionBanner } from "./components/AttentionBanner";
import { metricsData } from "./data/dashboardData";
import { DateRangePicker } from "./components/DateRangePicker";

const PerformanceChart = lazy(() =>
  import("./components/PerformanceChart").then((module) => ({
    default: module.PerformanceChart,
  }))
);

function App() {


  return (
    <div className="app">
      <Sidebar />

      <main className="dashboard">
          <header className="dashboard-header">
          <div className="header-text">
            <h1>Good afternoon, Demo 👋</h1>
            <p>Here's what Bonnie handled for you.</p>
          </div>

          <DateRangePicker />
        </header>
        
        <AttentionBanner />

             <section className="metrics">
                {metricsData.map((metric) => (
                  <MetricCard
                    key={metric.id}
                    title={metric.title}
                    value={metric.value}
                    highlight={metric.highlight} 
                    icon={metric.icon}   
                  />
                ))}
              </section>

              <section className="dashboard-content">
                <Suspense  fallback={<div className="chart-loading chart-card chart-skeleton">Loading chart...</div> }>
                  <PerformanceChart />
                </Suspense>
                <ActivityList />
              </section>

              <PerformanceSummary />

      </main>
    </div>
  );
}

export default App;