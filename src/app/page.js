import Featured from "../../components/featured";
import Products from "../../components/products/products";
import { getNewArrivals } from "../../lib/products";

export default async function Home() {
  const products = await getNewArrivals();

  const featuredItem = products.find((item) => item.id === "cqiwhz6jo8");
  return (
    <div>
      <Featured featuredItem={featuredItem} />
      {/* <div suppressHydrationWarning></div> */}

      <Products products={products} proType="newArrivals" />
    </div>
  );
}
