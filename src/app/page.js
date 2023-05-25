"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Cart from "./components/Cart/Cart";
import { items, couponsOptions } from "./data";

export default function Home() {
    const [cartItems, setCartItems] = useState(items);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [coupon, setCoupon] = useState("");

    const isCouponValid = (coupon) => {
        console.log(coupon);
        return couponsOptions.find((coupon) => coupon.name === coupon);
    };

    const totalPrice = () => {
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            const { price, quantity } = cartItems[i];
            total += price * quantity;
        }

        console.log("loop");

        if (coupon) {
            const actualCoupon = isCouponValid();
            if (actualCoupon) total *= actualCoupon.percentualDiscount;
        }

        return total;
    };

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
                    isCouponValid(coupon).percentualDiscount
                }% applied`}
            {isCartOpen && (
                <Cart
                    items={cartItems}
                    setItems={setCartItems}
                    handleCart={handleCart}
                    totalPrice={totalPrice}
                    handleChangeCoupon={handleChangeCoupon}
                />
            )}
        </main>
    );
}
