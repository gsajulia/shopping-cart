import CartHeader from "../CartHeader/CartHeader";
import CartItem from "../CartItem/CartItem";
import CartResume from "../CartResume/CartResume";
import styles from "./cart.module.css";

export default function Cart({
    items,
    handleCart,
    totalPrice,
    handleChangeCoupon,
    setSelectedItem,
    discountText,
    decreaseItem,
    increaseItem,
}) {
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
                                    index,
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
