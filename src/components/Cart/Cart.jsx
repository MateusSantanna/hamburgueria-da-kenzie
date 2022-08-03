import CartProducts from "../CartProducts/CartProducts";

function Cart({ currentSale, cartTotal, setCurrentSale, removeCart }) {
  return (
    <div className="cart">
      <div className="cartName">
        <h1>Carrinho de Compras</h1>
        <div className="cardsCart">
          <CartProducts
            removeCart={removeCart}
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
          />
        </div>
      </div>
      <p>Valor Total: {currentSale}</p>
      <button>Remover Todos</button>
    </div>
  );
}

export default Cart;
