export async function getAllProducts() {
  const res = await fetch("/allProducts");
  if (!res.ok) {
    throw new Error("Failed to fetch data amoor");
  }
  const data = await res.json();
  return data;
}

export async function getNewArrivals() {
  const res = await fetch("/newArrivals");
  if (!res.ok) {
    throw new Error("Failed to fetch data amoor");
  }
  const data = await res.json();
  return data;
}
