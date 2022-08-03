// MEU OBJETIVO É CRIAR OS CARDS DO PRODUTO DENTRO DO CARRINHO USANDO ESSE COMPONENTE

import { ButtonRemover, ListaCards, Main } from "./Carrinho";

function CartProducts({ item, removeCart }) {
  return (
    <Main>
      <img src={item.img} alt={item.name} />
      <ListaCards>
        <>
          <h4>{item.name}</h4>
          <p>{item.category}</p>
        </>
      </ListaCards>
      <ButtonRemover onClick={() => removeCart(item)}>Remover</ButtonRemover>
    </Main>
  );
}

export default CartProducts;
