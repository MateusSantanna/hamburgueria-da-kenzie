import CartProducts from "../CartProducts/CartProducts";

function Cart({
  currentSale,
  cartTotal,
  setCurrentSale,
  removeCart,
  removeTodos,
}) {
  return (
    <div>
      <div>
        {currentSale.map((item, id) => (
          <CartProducts
            key={id}
            removeCart={removeCart}
            setCurrentSale={setCurrentSale}
            item={item}
          />
        ))}
      </div>
      <p>Valor Total: {cartTotal}</p>
      <button onClick={() => removeTodos}>Remover Todos</button>
    </div>
  );
}

export default Cart;
