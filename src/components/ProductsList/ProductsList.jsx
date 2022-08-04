import Product from "../Product/Product";
import { PaiDosCards } from "../Product/CardsScreen";

function ProductsList({ products, adicionarCarrinho }) {
  return (
    <>
      <PaiDosCards>
        {products.map((item, id) => (
          <Product key={id} item={item} adicionarCarrinho={adicionarCarrinho} />
        ))}
      </PaiDosCards>
    </>
  );
}

export default ProductsList;
