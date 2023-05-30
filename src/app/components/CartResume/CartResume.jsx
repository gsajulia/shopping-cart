import { useState } from "react";
import styles from "./cartResume.module.css";
import Image from "next/image";
import tagCoupon from "../../../../public/tagCoupon.svg";

export default function CartResume({
    totalPrice,
    handleChangeCoupon,
    discountText,
}) {
    const [couponEnabled, setCouponEnabled] = useState(false);
    const [couponName, setCouponName] = useState("rocketseat");

    return (
        <div className={styles.container}>
            <div className={styles.totalPrice}>
                <span>Total:</span>
                <span>R$ {totalPrice}</span>
            </div>
            {couponEnabled && (
                <div className={styles.applyCoupon}>
                    <button
                        className={styles.applyCouponButton}
                        onClick={() => {
                            handleChangeCoupon(couponName);
                            setCouponEnabled(false);
                        }}
                    >
                        Save
                    </button>
                    <input
                        className={styles.inputCoupon}
                        value={couponName}
                        onChange={(e) => setCouponName(e.target.value)}
                    />
                </div>
            )}

            {discountText}

            <button
                className={styles.addCoupon}
                onClick={() => setCouponEnabled(true)}
            >
                <Image
                    src={tagCoupon}
                    alt="icon of tagCoupon"
                    width={24}
                    height={24}
                />
                Adicionar cupom
            </button>
            <div className={styles.containerButton}>
                <button className={styles.finishButton}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
}
