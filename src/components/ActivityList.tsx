import "./ActivityList.css";

import { activities } from "../data/dashboardData";

export function ActivityList() {


  return (

    <section className="activity-card">
      <div className="activity-header">
        <h2>Recent activity</h2>
        <button>View all</button>
      </div>
      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-item" key={activity.id}>
            <strong>{activity.title}</strong>
            <span>{activity.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );

}