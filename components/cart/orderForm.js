import styles from "./orderForm.module.css";
function OrderForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <input required type="text" placeholder="Name" />
      </div>
      <div className={styles.formGroup}>
        <input required type="email" placeholder="Email" />
      </div>
      <div className={styles.formGroup}>
        <input required type="text" placeholder="City" />
      </div>
      <div className={styles.formGroup}>
        <input required type="text" placeholder="Postal Code" />
      </div>
      <div className={styles.formGroup}>
        <input required type="text" placeholder="Street Address" />
      </div>
      <div className={styles.formGroup}>
        <input required type="text" placeholder="Country" />
      </div>
      <div className={styles.btnDiv}>
        <button type="submit" className={styles.darkButton}>
          continue to payment
        </button>
      </div>
    </form>
  );
}

export default OrderForm;
