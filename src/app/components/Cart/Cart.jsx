import CartHeader from "../CartHeader/CartHeader";
import CartItem from "../CartItem/CartItem";
import CartResume from "../CartResume/CartResume";
import styles from "./cart.module.css";

export default function Cart({
  items,
  setItems,
  handleCart,
  totalPrice,
  handleChangeCoupon,
}) {
  const decreaseItem = (index) => {
    if (items[index].quantity <= 0) return;
    const tempItems = [...items];
    tempItems[index].quantity--;
    setItems(tempItems);
  };

  const increaseItem = (index) => {
    const tempItems = [...items];
    tempItems[index].quantity++;
    setItems(tempItems);
  };

  return (
    <div
      style={{
        width: 428,
        height: "auto",
        background: "#1E1E1E",
        float: "right",
        color: "white",
        zIndex: 2,
      }}
    >
      <CartHeader items={items} onCloseCart={handleCart} />
      <div className={styles.cardItem}>
        {items.map(({ id, title, price, quantity, img }, index) => (
          <CartItem
            decreaseItem={() => decreaseItem(index)}
            increaseItem={() => increaseItem(index)}
            title={title}
            price={parseFloat(price).toFixed(2)}
            quantity={quantity}
            img={img}
            key={id}
          />
        ))}
      </div>
      <CartResume
        totalPrice={totalPrice}
        handleChangeCoupon={handleChangeCoupon}
      />
    </div>
  );
}
