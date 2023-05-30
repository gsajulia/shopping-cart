import Image from "next/image";
import styles from "./cartItem.module.css";
import PriceSection from "../PriceSection/PriceSection";

export default function CartItem({
    increaseItem,
    decreaseItem,
    onClick,
    title,
    price,
    quantity,
    img,
    alt,
}) {
    return (
        <div className={styles.container}>
            <div onClick={onClick}>
                <Image src={img} alt={alt} width={104} height={104} />
            </div>
            <div className={styles.descriptionItem}>
                <p className={styles.titleItems} onClick={onClick}>
                    {title}
                </p>
                <PriceSection
                    decreaseItem={decreaseItem}
                    increaseItem={increaseItem}
                    price={price}
                    quantity={quantity}
                />
            </div>
        </div>
    );
}
