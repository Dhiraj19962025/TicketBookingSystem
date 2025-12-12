const STORAGE_KEY = "shows_data";

// GET all shows
export const fetchShows = async () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// CREATE a show
export const createShow = async (show) => {
  const existing = await fetchShows();
  const newShow = { ...show, id: Date.now().toString() };
  const updated = [...existing, newShow];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newShow;
};

// DELETE a show
export const deleteShow = async (id) => {
  const existing = await fetchShows();
  const filtered = existing.filter((s) => s.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
};

// GET show by ID
export const fetchShowById = async (id) => {
  const existing = await fetchShows();
  return existing.find((s) => s.id === id);
};
