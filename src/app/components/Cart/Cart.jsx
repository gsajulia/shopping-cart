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
    setSelectedItem,
    discountText,
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
                right: 0,
                top: 0,
                color: "white",
                position: "absolute",
                zIndex: 2,
            }}
        >
            <CartHeader items={items} onCloseCart={handleCart} />
            <div className={styles.cardItem}>
                {items.map(
                    ({ id, title, price, quantity, img, alt }, index) => (
                        <CartItem
                            onClick={() =>
                                setSelectedItem({
                                    id,
                                    title,
                                    price,
                                    quantity,
                                    img,
                                    alt,
                                })
                            }
                            decreaseItem={() => decreaseItem(index)}
                            increaseItem={() => increaseItem(index)}
                            title={title}
                            price={parseFloat(price).toFixed(2)}
                            quantity={quantity}
                            img={img}
                            key={id}
                        />
                    )
                )}
            </div>
            <CartResume
                totalPrice={totalPrice}
                handleChangeCoupon={handleChangeCoupon}
                discountText={discountText}
            />
        </div>
    );
}
