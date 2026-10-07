import "./PerformanceSummary.css";

export function PerformanceSummary() {
  return (
    <section className="performance-card">
      <div className="performance-heading">
        <h2>Bonnie performance</h2>
        <p>How your assistant is performing</p>
      </div>

      <div className="performance-metrics">
        <div>
          <span>Customer satisfaction</span>
          <strong>75%</strong>
        </div>

        <div>
          <span>Transfer rate</span>
          <strong>13.3%</strong>
        </div>

        <div>
          <span>Avg. transfer time</span>
          <strong>46 sec</strong>
        </div>
      </div>
    </section>
  );
}