// MEU OBJETIVO É CRIAR OS CARDS DO PRODUTO DENTRO DO CARRINHO USANDO ESSE COMPONENTE

function CartProducts({ product, removeCart }) {
  return (
    <main>
      <img src={product.img} alt={product.name} />
      <li>
        <>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </>
      </li>
      <button onClick={() => removeCart(product)}>Remover</button>
    </main>
  );
}

export default CartProducts;
