import Image from "next/image";
import styles from "./cartItem.module.css";

export default function CartItem({
  addItem,
  minusItem,
  title,
  price,
  quantity,
  img,
}) {
  return (
    <div className={styles.container}>
      <div>
        <Image src={img} alt="" width={104} height={104} />
      </div>
      <div className={styles.descriptionItem}>
        <p className={styles.titleItems}>{title}</p>
        <div className={styles.valueItem}>
          <span className={styles.priceItem}>R$ {price}</span>
          <div className={styles.switchQuantityItems}>
            <button className={styles.minusButton} onClick={minusItem}>
              -
            </button>
            <span className={styles.quantityItem}>{quantity}</span>
            <button className={styles.plusButton} onClick={addItem}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
