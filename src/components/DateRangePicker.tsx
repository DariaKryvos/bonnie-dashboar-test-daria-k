import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { format } from "date-fns";
import { CalendarDays, ChevronDown } from "lucide-react";
import "./DateRangePicker.css";

import "react-day-picker/style.css";

export function DateRangePicker() {
  const [isOpen, setIsOpen] = useState(false);

  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 8, 1),
    to: new Date(2026, 8, 30),
  });

  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <div className="date-picker">

      {/* Date filter button */}
      <button
        className="date-filter"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarDays size={17} />

        <span>
          {range?.from && range?.to
            ? `${format(range.from, "d MMM")} – ${format(range.to, "d MMM")}`
            : "Select dates"}
        </span>

        <ChevronDown size={15} />
      </button>

      {/* Calendar dropdown */}
      {isOpen && (
        <div className="date-picker-popover">

          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
          />

          <div className="date-picker-actions">

            <button
              className="cancel-button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>

            <button
              className="apply-button"
              onClick={handleApply}
              disabled={!range?.from || !range?.to}
            >
              Apply
            </button>

          </div>
        </div>
      )}
    </div>
  );
}