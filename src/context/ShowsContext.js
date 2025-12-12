import React, { createContext, useContext, useState } from "react";
import { fetchShows as apiFetchShows } from "../api";

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const data = await apiFetchShows();
    setShows(data || []); // avoid undefined!
  };

  return (
    <ShowsContext.Provider value={{ shows, fetchShows }}>
      {children}
    </ShowsContext.Provider>
  );
};

export const useShows = () => useContext(ShowsContext);
