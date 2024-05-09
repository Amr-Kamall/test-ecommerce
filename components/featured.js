import React from "react";
import Center from "./center";
import styles from "./featured.module.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import CartIcon from "./products/cartIcon";

function Featured({ featuredItem }) {
  return (
    <div className={styles.FeaturedDiv}>
      <Center>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1 className={styles.title}>{featuredItem.name}</h1>
            <p className={styles.desc}>{featuredItem.description}</p>
            <div className={styles.parentBtn}>
              <Link href="/pro">
                <Button type="transparent">Read more</Button>
              </Link>
              <Button product={featuredItem} type="primarybtn">
                {" "}
                <CartIcon styles={styles} />
                Add to cart
              </Button>
            </div>
          </div>
          <div className={styles.img}>
            <Image
              src={featuredItem.imageUrl}
              alt="Featured"
              width={"400"}
              height={"400"}
              priority
            />
          </div>
        </div>
      </Center>
    </div>
  );
}

export default Featured;
