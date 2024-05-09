import styles from "./productItem.module.css";
import Button from "../Button";
import ProductImgBox from "./productImgBox";

function ProductItem({ product, proType }) {
  return (
    <div className={styles.proBox}>
      <ProductImgBox proType={proType} product={product} />
      <div className={styles.proInfo}>
        <div className={styles.priceBox}>
          <span className={styles.price}>${product.price}</span>
        </div>
        <Button id={product.id} product={product} type="secondary">
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
