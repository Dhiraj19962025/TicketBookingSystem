import { useEffect, useState } from "react";
import { fetchShows } from "../api";

export default function useFetchShows() {
  const [shows, setShows] = useState([]);

  const load = async () => {
    const data = await fetchShows();
    setShows(data);
  };

  useEffect(() => {
    load();
  }, []);

  return { shows, reloadShows: load };
}
