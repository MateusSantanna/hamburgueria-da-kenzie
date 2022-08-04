import { BotaoPesquisar, Cabecalho, CaixaDeTexto } from "./HeaderStyle";

function Header({ InputValue, setInputValue, filtered }) {
  return (
    <>
      <Cabecalho>
        <img src="Mask Group.png" alt="Logo da Kenzie" srcset="" />
        <form onSubmit={(event) => event.preventDefault()}>
          <CaixaDeTexto
            value={InputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Pesquisar produto"
          />
          <BotaoPesquisar type="button" onClick={() => filtered(InputValue)}>
            Pesquisar
          </BotaoPesquisar>
        </form>
      </Cabecalho>
    </>
  );
}

export default Header;
