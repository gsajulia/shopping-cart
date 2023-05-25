import Image from "next/image";
import styles from "./cartHeader.module.css";
import exitIcon from "../../../../public/exitIcon.svg";

export default function CartHeader({ items, onCloseCart }) {
  const itemsLength = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <h4>Seu carrinho tem {itemsLength} itens</h4>
      <button className={styles.buttonExit} onClick={onCloseCart}>
        <Image src={exitIcon} alt="icon of exit" width={13} height={13} />
      </button>
    </div>
  );
}
