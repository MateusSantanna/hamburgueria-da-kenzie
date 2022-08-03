import Product from "../Product/Product";

function ProductsList({ products, adicionarCarrinho }) {
  return (
    <>
      <ul>
        {products.map((item, id) => (
          <Product key={id} item={item} adicionarCarrinho={adicionarCarrinho} />
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
