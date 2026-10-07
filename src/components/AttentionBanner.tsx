import "./AttentionBanner.css";
import { CircleAlert, ArrowRight } from "lucide-react";

export function AttentionBanner() {
  return (
    <div className="attention-banner">
      <div className="attention-message">
        <CircleAlert size={19} />

        <div>
          <strong>2 conversations need your attention</strong>
          <p>Bonnie couldn't fully resolve these requests.</p>
        </div>
      </div>

      <button className="attention-button">
        Review
        <ArrowRight size={15} />
      </button>
    </div>
  );
}