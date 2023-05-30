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
        <div className={styles.container}>
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
                            alt={alt}
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
