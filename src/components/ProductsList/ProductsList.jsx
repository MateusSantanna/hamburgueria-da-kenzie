import Product from "../Product/Product";
import { PaiDaLista } from "../Product/ProductScreen";

function ProductsList({ products, adicionarCarrinho }) {
  return (
    <>
      <PaiDaLista>
        {products.map((item, id) => (
          <Product key={id} item={item} adicionarCarrinho={adicionarCarrinho} />
        ))}
      </PaiDaLista>
    </>
  );
}

export default ProductsList;
