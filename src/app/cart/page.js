"use client";
import OrderForm from "../../../components/cart/orderForm";
import Center from "../../../components/center";
import ProductImgBox from "../../../components/products/productImgBox";
import { useProducts } from "../../../contexts/productContext";
import styles from "./page.module.css";

function CartPage() {
  let {
    increaseQuantity,
    decreaseQuantity,
    cart,
    calcTotalPrice,
    updateCartPrice,
  } = useProducts();

  if (!cart?.length) {
    return <h1 className={styles.cartEmpty}>cart is empty!</h1>;
  }

  return (
    <div className={styles.cartPage}>
      <Center>
        <div className={styles.pageWrapper}>
          <div className={styles.cartContainer}>
            <h1 className={styles.title}>cart</h1>
            <div className={styles.cartTable}>
              <div className={styles.cartRow}>
                <p>PRODUCT</p>
                <p>QUANTITY</p>
                <p>PRICE</p>
              </div>
              <div className={styles.cartContent}>
                {cart.map((ele) => {
                  return (
                    ele && (
                      <div key={ele.id} className={styles.cartInfo}>
                        {ele.imageUrl && (
                          <ProductImgBox border="border" product={ele} />
                        )}
                        <div className={styles.quantity}>
                          <span onClick={() => decreaseQuantity(ele.id)}>
                            -
                          </span>
                          <p>{ele.quantity || 1}</p>
                          <span onClick={() => increaseQuantity(ele.id)}>
                            +
                          </span>
                        </div>
                        <div className={styles.price}>
                          ${updateCartPrice(ele.id)}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
              <div className={styles.totalPrice}>
                <p>${calcTotalPrice()}</p>
              </div>
            </div>
          </div>
          <div className={styles.orderContainer}>
            <h1 className={styles.title}>order information</h1>
            <OrderForm />
          </div>
        </div>
      </Center>
    </div>
  );
}

export default CartPage;
