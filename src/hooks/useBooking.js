import { useEffect, useState } from "react";
import { fetchShowById } from "../api";

export default function useBooking(id) {
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShowById(id).then((data) => {
      setShow(data);
    });
  }, [id]);

  return { show };
}
