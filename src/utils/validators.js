export function validateShow({ name, startTime, totalSeats }) {
  const err = {};
  if (!name) err.name = "Name required";
  if (!startTime) err.startTime = "Time required";
  if (!totalSeats || totalSeats < 1) err.totalSeats = "Enter valid seats";
  return err;
}
