import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useShows } from "../context/ShowsContext";

export default function ShowsList() {
  const { shows, fetchShows } = useShows();

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div>
      <h2>Available Shows</h2>
      {shows.map((s) => (
        <div key={s.id}>
          <h4>{s.name}</h4>
          <p>{new Date(s.date).toLocaleString()}</p>   {/* FIXED */}
          <Link to={`/booking/${s.id}`}>Book</Link>
        </div>
      ))}
    </div>
  );
}
