import Image from "next/image";
import styles from "./DetailedItem.module.css";

export default function DetailedItem({ img, title, price, alt }) {
    return (
        <div className={styles.container}>
            <Image src={img} alt={alt} width={400} height={400} />
            <p>{title}</p>
            {price}
        </div>
    );
}
