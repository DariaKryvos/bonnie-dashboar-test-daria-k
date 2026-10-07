import "./ActivityList.css";
import { ArrowRight } from "lucide-react";

import { activities } from "../data/dashboardData";

export function ActivityList() {


  return (

    <section className="activity-card">
      <div className="activity-header">
        <h2>Recent conversations</h2>
        <button type="button">
          View all conversations
          <ArrowRight size={13} aria-hidden="true" />
        </button>
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