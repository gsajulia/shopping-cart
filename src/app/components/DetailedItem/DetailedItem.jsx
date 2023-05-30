import Image from "next/image";
import styles from "./DetailedItem.module.css";
import PriceSection from "../PriceSection/PriceSection";

export default function DetailedItem({
    img,
    title,
    price,
    alt,
    quantity,
    decreaseItem,
    increaseItem,
}) {
    return (
        <div className={styles.container}>
            <Image src={img} alt={alt} width={350} height={350} />
            <p>{title}</p>
            <PriceSection
                decreaseItem={decreaseItem}
                increaseItem={increaseItem}
                price={price}
                quantity={quantity}
            />
        </div>
    );
}
