import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowById } from "../api";
import SeatGrid from "./SeatGrid";

export default function BookingPage() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetchShowById(id).then((res) => {
      setShow(res); // your API returns plain data, no {ok,data}
    });
  }, [id]);

  const toggleSeatSelection = (seatId) => {
    setSelected((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const book = async () => {
    alert("Booking is not implemented yet.");
    console.log("Selected seats:", selected);
  };

  if (!show) return <p>Loading...</p>;

  return (
    <div>
      <h2>{show.name}</h2>

      <SeatGrid
        seats={show.seats || []}
        selectedSeatIds={selected}
        onSelect={toggleSeatSelection}
      />

      <button onClick={book}>Confirm Booking</button>
    </div>
  );
}
