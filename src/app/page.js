"use client";
import { useState, useMemo } from "react";
import styles from "./page.module.css";
import Cart from "./components/Cart/Cart";
import { items, couponsOptions } from "./data";
import Image from "next/image";
import DetailedItem from "./components/DetailedItem/DetailedItem";

export default function Home() {
    const [cartItems, setCartItems] = useState(items);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
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

    const modifySelectedQuantity = (id, quantity) => {
        if (selectedItem && selectedItem.id === id)
            setSelectedItem((item) => ({ ...item, quantity }));
    };

    const decreaseItem = (index) => {
        if (cartItems[index].quantity <= 0) return;
        const tempItems = [...cartItems];
        tempItems[index].quantity--;

        modifySelectedQuantity(cartItems[index].id, tempItems[index].quantity);
        setCartItems(tempItems);
    };

    const increaseItem = (index) => {
        const tempItems = [...cartItems];
        tempItems[index].quantity++;
        modifySelectedQuantity(cartItems[index].id, tempItems[index].quantity);
        setCartItems(tempItems);
    };

    return (
        <main className={styles.main}>
            {selectedItem && (
                <DetailedItem
                    img={selectedItem.img}
                    title={selectedItem.title}
                    price={selectedItem.price}
                    alt={selectedItem.alt}
                    quantity={selectedItem.quantity}
                    decreaseItem={() => decreaseItem(selectedItem.index)}
                    increaseItem={() => increaseItem(selectedItem.index)}
                />
            )}

            {isCartOpen ? (
                <Cart
                    items={cartItems}
                    handleCart={handleCart}
                    totalPrice={totalPrice}
                    handleChangeCoupon={handleChangeCoupon}
                    setSelectedItem={setSelectedItem}
                    discountText={
                        coupon && isCouponValid(coupon)
                            ? `Coupon of ${
                                  isCouponValid(coupon).percentualDiscount * 100
                              }% applied`
                            : ""
                    }
                    decreaseItem={decreaseItem}
                    increaseItem={increaseItem}
                />
            ) : (
                <button
                    className={styles.returnCartButton}
                    onClick={handleCart}
                >
                    Abrir Carrinho
                </button>
            )}
        </main>
    );
}
