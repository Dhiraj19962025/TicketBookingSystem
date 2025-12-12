import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Demo", role: "user", isAuthenticated: true });

  const toggleRole = () =>
    setUser((u) => ({ ...u, role: u.role === "admin" ? "user" : "admin" }));

  return (
    <AuthContext.Provider value={{ user, toggleRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
