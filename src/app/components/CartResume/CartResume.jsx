import { useEffect, useState } from "react";
export default function CartResume({ totalPrice, handleChangeCoupon }) {
    const [couponEnabled, setCouponEnabled] = useState(false);
    const [couponName, setCouponName] = useState("rocketset");

    return (
        <div>
            Total: {totalPrice()}
            {couponEnabled && (
                <>
                    <button
                        onClick={() => {
                            handleChangeCoupon(couponName);
                            setCouponEnabled(false);
                        }}
                    >
                        Save
                    </button>
                    <input
                        value={couponName}
                        onChange={(e) => setCouponName(e.target.value)}
                    />
                </>
            )}
            <button onClick={() => setCouponEnabled(true)}>
                Adicionar cupom
            </button>
            <button>Finalizar Compra</button>
        </div>
    );
}
