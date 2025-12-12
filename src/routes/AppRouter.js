import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShowsList from "../components/ShowsList";
import BookingPage from "../components/BookingPage";
import AdminCreateShow from "../components/AdminCreateShow";
import AdminShowsList from "../components/AdminShowsList";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ShowsList />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

function AdminPanel() {
  return (
    <>
      <AdminCreateShow />
      <AdminShowsList />
    </>
  );
}
