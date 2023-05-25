export default function CartHeader({ itemsLength, onCloseCart }) {
    return (
        <div>
            <h4>Seu carrinho tem {itemsLength} itens</h4>
            <button onClick={onCloseCart}>x</button>
        </div>
    );
}
