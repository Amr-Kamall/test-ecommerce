import Featured from "../../components/featured";
import Products from "../../components/products/products";
import { newArrivals } from "../../data";
// import { getNewArrivals } from "../../lib/products";

export default async function Home() {
  const products = newArrivals; //dumy data instead of json-server

  const featuredItem = products.find((item) => item.id === "cqiwhz6jo8");
  return (
    <div>
      <Featured featuredItem={featuredItem} />
      <Products products={products} proType="newArrivals" />
    </div>
  );
}
