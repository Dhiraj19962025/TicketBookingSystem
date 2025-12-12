import React from "react";

export default function SeatGrid({ seats = [], selectedSeatIds = [], onSelect }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 40px)", gap: "8px" }}>
      {seats.map((s) => (
        <div
          key={s.id}
          className={`seat ${selectedSeatIds.includes(s.id) ? "selected" : ""}`}
          onClick={() => onSelect(s.id)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer",
            background: selectedSeatIds.includes(s.id) ? "#4caf50" : "#fff",
          }}
        >
          {s.number}
        </div>
      ))}
    </div>
  );
}
