function Product({ item, adicionarCarrinho }) {
  return (
    <>
      <li>
        <div>
          <img src={item.img} alt={item.name} />
          <h1>{item.name}</h1>
          <p>{item.category}</p>
          <p>R${item.price},00</p>
          <button onClick={() => adicionarCarrinho(item)}>Adicionar</button>
        </div>
      </li>
    </>
  );
}

export default Product;
