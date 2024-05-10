import Products from "../../../components/products/products";
import { allProducts } from "../../../data";
// import { getAllProducts } from "../../../lib/products";

async function AllProductsPage() {
  const allProdcuts = allProducts;
  console.log(allProdcuts);
  return (
    <>
      <Products products={allProdcuts} proType="allProducts" />
    </>
  );
}

export default AllProductsPage;
