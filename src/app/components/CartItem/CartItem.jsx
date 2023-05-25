export default function CartItem({
    addItem,
    minusItem,
    title,
    price,
    quantity,
    img,
}) {
    return (
        <div>
            <p>{title}</p>
            <div>
                <span>{price}</span>
                <button onClick={minusItem}>-</button>
                <span>{quantity}</span>
                <button onClick={addItem}>+</button>
            </div>
        </div>
    );
}
