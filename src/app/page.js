import Featured from "../../components/featured";
import Products from "../../components/products/products";

export default async function Home() {
  try {
    const res = await fetch("http://localhost:5005/newArrivals");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const products = await res.json();
    console.log(products);

    const featuredItem = products.find((item) => item.id === "cqiwhz6jo8");
    return (
      <div>
        <Featured featuredItem={featuredItem} />
        {/* <div suppressHydrationWarning></div> */}

        <Products products={products} proType="newArrivals" />
      </div>
    );
  } catch (error) {
    console.log("Error fetching data:", error);
    // Render some error message or handle the error in a different way
  }
}
