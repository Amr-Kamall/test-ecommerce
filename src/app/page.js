import Featured from "../../components/featured";
import Products from "../../components/products/products";

export default async function Home() {
  const res = await fetch("http://localhost:5005/newArrivals");
  const products = await res.json();
  console.log(products);

  const featuredItem = products.find((item) => item.id === "cqiwhz6jo8");
  return (
    <div>
      <Featured featuredItem={featuredItem} />
      <Products products={products} proType="newArrivals" />
    </div>
  );
}
