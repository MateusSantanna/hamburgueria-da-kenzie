import { Paragrafos, ValorOption } from "../CartProducts/Carrinho";
import CartProducts from "../CartProducts/CartProducts";

function Cart({
  currentSale,
  cartTotal,
  setCurrentSale,
  removeCart,
  removeTodos,
}) {
  return (
    <>
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

      <ValorOption>
        <Paragrafos>
          <p>Valor Total:</p>
          <p>R${cartTotal},00</p>
        </Paragrafos>

        <button onClick={() => removeTodos}>Remover Todos</button>
      </ValorOption>
    </>
  );
}

export default Cart;
