import Image from "next/image";
import styles from "./productImgBox.module.css";
import Link from "next/link";

function ProductImgBox({ product, border, proType }) {
  return (
    <div className={styles.productBoxImg}>
      <div
        className={` ${border ? styles.imgWrapperBorder : styles.imgWrapper} `}
      >
        <Link href={`/products/${product.id}`}>
          <Image
            src={
              proType === "newArrivals"
                ? product.imageUrl
                : product.imageUrl.image1 ?? product.imageUrl
            }
            width={400}
            height={400}
            priority
            alt={product.name}
          />
        </Link>
      </div>
      <p className={styles.proName}>{product.name}</p>
    </div>
  );
}

export default ProductImgBox;
