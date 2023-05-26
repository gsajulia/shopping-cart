import Image from "next/image";
import styles from "./cartItem.module.css";

export default function CartItem({
  increaseItem,
  decreaseItem,
  title,
  price,
  quantity,
  img,
  alt,
}) {
  return (
    <div className={styles.container}>
      <div>
        <Image src={img} alt={alt} width={104} height={104} />
      </div>
      <div className={styles.descriptionItem}>
        <p className={styles.titleItems}>{title}</p>
        <div className={styles.valueItem}>
          <span className={styles.priceItem}>R$ {price}</span>
          <div className={styles.switchQuantityItems}>
            <button className={styles.minusButton} onClick={decreaseItem}>
              -
            </button>
            <span className={styles.quantityItem}>{quantity}</span>
            <button className={styles.plusButton} onClick={increaseItem}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
