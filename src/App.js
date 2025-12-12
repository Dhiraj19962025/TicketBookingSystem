import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ShowsProvider } from "./context/ShowsContext";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <ShowsProvider>
        <AppRouter />
      </ShowsProvider>
    </AuthProvider>
  );
}
