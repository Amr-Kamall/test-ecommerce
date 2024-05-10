export async function getAllProducts() {
  const res = await fetch("http://localhost:5005/allProducts");
  if (!res.ok) {
    throw new Error("Failed to fetch data amoor");
  }
  const data = await res.json();
  return data;
}

export async function getNewArrivals() {
  const res = await fetch("http://localhost:5005/newArrivals");
  if (!res.ok) {
    throw new Error("Failed to fetch data amoor");
  }
  const data = await res.json();
  return data;
}
