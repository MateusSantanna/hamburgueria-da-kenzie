function Header({ InputValue, setInputValue, filtered }) {
  return (
    <>
      <main>
        <img alt="Logo BurguerKenzie" />
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            value={InputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Pesquisar produto"
          />
          <button type="button" onClick={() => filtered(InputValue)}>
            Pesquisar
          </button>
        </form>
      </main>
    </>
  );
}

export default Header;
