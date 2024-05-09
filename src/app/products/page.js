import Products from "../../../components/products/products";
import { getAllProducts } from "../../../lib/products";

async function AllProductsPage() {
  const allProdcuts = await getAllProducts();
  console.log(allProdcuts);
  return (
    <>
      <Products products={allProdcuts} proType="allProducts" />
    </>
  );
}

export default AllProductsPage;
