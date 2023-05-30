import styles from "./PriceSection.module.css";

export default function PriceSection({
    increaseItem,
    decreaseItem,
    price,
    quantity,
}) {
    return (
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
    );
}
