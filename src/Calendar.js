import React, { useState } from "react";

function Calendar({ setCurrentDay }) {
  const current = new Date();
  const [daysIndex, setDaysIndex] = useState(0);

  return (
    <div className="calendar-scroll">
      <div className="calendar-button">
        <button
          type="button"
          className="calendar-arrow"
          disabled={daysIndex === 0}
          onClick={() => setDaysIndex(daysIndex - 1)}
        >
          &#129080;
        </button>

        {Array.apply(null, Array(5))
          .map((day, index) => 
              <button
                className="benjamin-button"
                onClick={() => setCurrentDay(index)}
                type="button"
                key={day}
              >
                {index === 0
                  ? "today"
                  : `${current.getDate() + index}/${current.getMonth() + 1}`}
              </button>
          )
          .slice(daysIndex, daysIndex + 4)}

        <button
          type="button"
          className="calendar-arrow"
          disabled={daysIndex === 3}
          onClick={() => setDaysIndex(daysIndex + 1)}
        >
          &#129082;
        </button>
      </div>
    </div>
  );
}

export default Calendar;
