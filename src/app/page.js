"use client";
import { useState, useMemo } from "react";
import styles from "./page.module.css";
import Cart from "./components/Cart/Cart";
import { items, couponsOptions } from "./data";

export default function Home() {
    const [cartItems, setCartItems] = useState(items);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [coupon, setCoupon] = useState("");

    const isCouponValid = (actualCoupon) => {
        return couponsOptions.find((coupon) => coupon.name === actualCoupon);
    };

    const totalPrice = useMemo(() => {
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            const { price, quantity } = cartItems[i];
            total += price * quantity;
        }

        if (coupon) {
            const actualCoupon = isCouponValid(coupon);
            if (actualCoupon) total *= 1 - actualCoupon.percentualDiscount;
        }

        return parseFloat(total).toFixed(2);
    }, [coupon, cartItems]);

    const handleCart = () => {
        setIsCartOpen((cart) => !cart);
    };

    const handleChangeCoupon = (coupon) => {
        setCoupon(coupon);
    };

    return (
        <main className={styles.main}>
            {coupon &&
                isCouponValid(coupon) &&
                `Coupon of ${
                    isCouponValid(coupon).percentualDiscount * 100
                }% applied`}
            {isCartOpen ? (
                <Cart
                    items={cartItems}
                    setItems={setCartItems}
                    handleCart={handleCart}
                    totalPrice={totalPrice}
                    handleChangeCoupon={handleChangeCoupon}
                />
            ) : <button onClick={handleCart}>open</button>}
        </main>
    );
}
