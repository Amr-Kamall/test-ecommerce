import Products from "../../../components/products/products";

async function AllProductsPage() {
  const res = await fetch("http://localhost:5005/allProducts");
  const allProdcuts = await res.json();
  console.log(allProdcuts);
  return (
    <>
      <Products products={allProdcuts} proType="allProducts" />
    </>
  );
}

export default AllProductsPage;
