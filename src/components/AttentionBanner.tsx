import "./AttentionBanner.css";
import { CircleAlert, ArrowRight } from "lucide-react";

export function AttentionBanner() {
  return (
    <div className="attention-banner">
      <div className="attention-message">
        <span className="attention-icon" aria-hidden="true">
          <CircleAlert size={22} strokeWidth={1.8} />
        </span>
        <div className="attention-copy">
          <span className="attention-label">Needs attention</span>
          <strong>5 conversations need your team</strong>
          <p>
            1 large-group request · 3 callbacks · 1 guest complaint
          </p>
        </div>
      </div>

      <button type="button" className="attention-button">
        Review
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}