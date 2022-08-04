import {
  ButtonCards,
  ImagemScreen,
  ListaScreen,
  TituloProduto,
} from "./CardsScreen";

function Product({ item, adicionarCarrinho }) {
  return (
    <>
      <ListaScreen>
        <ImagemScreen src={item.img} alt={item.name} />

        <TituloProduto>{item.name}</TituloProduto>
        <p>{item.category}</p>
        <p>R${item.price},00</p>
        <ButtonCards onClick={() => adicionarCarrinho(item)}>
          Adicionar
        </ButtonCards>
      </ListaScreen>
    </>
  );
}

export default Product;
