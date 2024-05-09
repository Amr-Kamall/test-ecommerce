"use client";
import React from "react";
import styles from "./Button.module.css";
import { useProducts } from "../contexts/productContext";

function Button({ children, product, type }) {
  // we do this object to make image readable in the cart page
  const productDetail = {
    date: product?.date,
    description: product?.description,
    id: product?.id,
    imageUrl: product?.imageUrl?.image1, //important
    name: product?.name,
    price: product?.price,
    quantity: product?.quantity,
  };

  const { addToCart } = useProducts();
  if (type === "transparent") {
    return <button className={styles.transparentBtn}>{children}</button>;
  } else if (type === "secondary") {
    return (
      <button
        onClick={() => addToCart(product)}
        className={styles.secondaryBtn}
      >
        {children}
      </button>
    );
  } else if (type === "primarybtnDetails") {
    return (
      <button
        className={styles.primaryBtn}
        onClick={() => addToCart(productDetail)}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={styles.primaryBtn} onClick={() => addToCart(product)}>
      {children}
    </button>
  );
}

export default Button;
