import CartProducts from "../CartProducts/CartProducts";

function Cart({ currentSale, setCurrentSale, removeCart }) {
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
    </>
  );
}

export default Cart;
