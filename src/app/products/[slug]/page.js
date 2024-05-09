import Center from "../../../../components/center";
import styles from "./page.module.css";
import Button from "../../../../components/Button";
import ImageWrapper from "../../../../components/products/imageWrapper";
import CartIcon from "../../../../components/products/cartIcon";
import { getAllProducts } from "../../../../lib/products";

async function ProductDetailPage({ params }) {
  const allProdcuts = await getAllProducts();
  const selectedId = params.slug;

  const selectedProdcut = allProdcuts.find(
    (proItem) => proItem.id === selectedId
  );

  return (
    <div className={styles.proDetailPage}>
      <Center>
        <div className={styles.pageWrapper}>
          <ImageWrapper styles={styles} selectedProdcut={selectedProdcut} />
          <div className={styles.infoWrapper}>
            <h1>{selectedProdcut.name}</h1>
            <p className={styles.desc}>{selectedProdcut.description}</p>
            <div className={styles.pricing}>
              <p className={styles.price}>${selectedProdcut.price}</p>
              <Button product={selectedProdcut} type="primarybtnDetails">
                <CartIcon styles={styles} />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Center>
    </div>
  );
}

export default ProductDetailPage;
