import CartHeader from "../CartHeader/CartHeader";
import CartItem from "../CartItem/CartItem";
import CartResume from "../CartResume/CartResume";

export default function Cart({
    items,
    setItems,
    handleCart,
    totalPrice,
    handleChangeCoupon,
}) {
    const minusItem = (index) => {
        if (items[index].quantity <= 0) return;
        const tempItems = [...items];
        tempItems[index].quantity--;
        setItems(tempItems);
    };

    const addItem = (index) => {
        const tempItems = [...items];
        tempItems[index].quantity++;
        setItems(tempItems);
    };

    return (
        <div
            style={{
                width: 400,
                height: "100%",
                background: "black",
                float: "right",
                color: "white",
            }}
        >
            <CartHeader itemsLength={items.length} onCloseCart={handleCart} />
            {items.map(({ title, price, quantity, img }, index) => (
                <CartItem
                    minusItem={() => minusItem(index)}
                    addItem={() => addItem(index)}
                    title={title}
                    price={price}
                    quantity={quantity}
                    img={img}
                />
            ))}
            <CartResume
                totalPrice={totalPrice}
                handleChangeCoupon={handleChangeCoupon}
            />
        </div>
    );
}
