import React, { useEffect } from "react";
import { deleteShow } from "../api";
import { useShows } from "../context/ShowsContext";

export default function AdminShowsList() {
  const { shows, fetchShows } = useShows();

  useEffect(() => {
    fetchShows(); // load shows on mount
  }, []);

  if (!shows || shows.length === 0) {
    return (
      <div>
        <h2>All Shows</h2>
        <p>No shows added yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>All Shows</h2>

      {shows.map((show) => (
        <div key={show.id} style={{ padding: 10 }}>
          <b>{show.name}</b> — {show.date} — {show.type}

          <button
            style={{ marginLeft: 10 }}
            onClick={async () => {
              await deleteShow(show.id);
              fetchShows(); // reload from context
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
