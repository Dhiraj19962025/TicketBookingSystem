import React, { useState } from "react";
import { createShow } from "../api";
import { useShows } from "../context/ShowsContext";

export default function AdminCreateShow() {
  const { fetchShows } = useShows();   // ⬅ use context, NOT props

  const [form, setForm] = useState({
    name: "",
    date: "",
    type: "",
    totalSeats: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createShow(form);

    // Refresh show list after creating new show
    fetchShows();   // ⬅ This replaces reloadShows()

    alert("Show created successfully!");

    // Clear form
    setForm({
      name: "",
      date: "",
      type: "",
      totalSeats: 0,
    });
  };

  return (
    <div>
      <h2>Create New Show</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Show Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="date"
          type="datetime-local"
          value={form.date}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Type (Bus / Movie / Doctor)"
          value={form.type}
          onChange={handleChange}
        />

        <input
          name="totalSeats"
          type="number"
          placeholder="Total Seats"
          value={form.totalSeats}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
