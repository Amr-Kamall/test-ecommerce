import Center from "../center";
import ProductItem from "./ProductItem";
import styles from "./products.module.css";

async function Products({ products, proType }) {
  return (
    <div className={styles.productsContainer}>
      <Center>
        <h1 className={styles.proTitle}>
          {proType === "allProducts" ? "All Products" : "New Arrivals"}
        </h1>
        <main className={styles.proRow}>
          {products.map((product) => (
            <ProductItem proType={proType} key={product.id} product={product} />
          ))}
        </main>
      </Center>
    </div>
  );
}

export default Products;
