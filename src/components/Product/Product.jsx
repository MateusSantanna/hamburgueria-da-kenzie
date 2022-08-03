import { ImagemScreen, ListaScreen } from "./ProductScreen";

function Product({ item, adicionarCarrinho }) {
  return (
    <>
      <ListaScreen>
        <ImagemScreen src={item.img} alt={item.name} />
        <div>
          <h1>{item.name}</h1>
          <p>{item.category}</p>
          <p>R${item.price},00</p>
          <button onClick={() => adicionarCarrinho(item)}>Adicionar</button>
        </div>
      </ListaScreen>
    </>
  );
}

export default Product;
