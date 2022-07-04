// FETCH COLLECTIONS
export const fetchCollections = async function fetchCollections(
  pageNumber: number
) {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}api/collections?page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch collections");
  }
  return response.json();
};

// FETCH MINTS
export const fetchMints = async function fetchMints(pageNumber: number) {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}api/mints?page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch mints");
  }
  return response.json();
};

// FETCH NEWLY ADDED
export const fetchNewlyAdded = async function fetchNewlyAdded(
  pageNumber: number
) {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}api/newlyAdded?page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch newly added");
  }
  return response.json();
};

// FETCH LEADERSHIP
export const fetchLeadership = async function fetchLeadership(
  pageNumber: number
) {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}api/leadership?page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch leaderships");
  }
  return response.json();
};

// FETCH SALES
export const fetchSales = async function fetchSales(pageNumber: number) {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}api/sales?page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch sales");
  }
  return response.json();
};
