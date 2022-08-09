import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import {
  CarrinhoCompleto,
  CarrinhoTitulo,
  PaiDoCarrinho,
  PaiDeTodos,
} from "./style";
import { Paragrafos, ValorOption } from "./components/CartProducts/Carrinho";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [InputValue, setInputValue] = useState("");

  const cartTotal = currentSale.reduce(
    (total, product) => total + product.price,
    0
  );

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);

  function removeProduct(product) {
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
  }

  function adicionarCarrinho(item) {
    const encontrarItem = currentSale.find((itemCard) => itemCard === item);
    encontrarItem === undefined
      ? setCurrentSale([...currentSale, item])
      : alert("Este ítem já foi adicionado");
  }

  function removeTodos() {
    return currentSale.length > 0
      ? setCurrentSale([])
      : alert("Não existe itens no Carrinho");
  }

  return (
    <div className="App">
      <Header InputValue={InputValue} setInputValue={setInputValue} />

      <PaiDeTodos>
        <ProductsList
          products={products}
          adicionarCarrinho={adicionarCarrinho}
        />

        <PaiDoCarrinho>
          <CarrinhoTitulo>Carrinho de Compras</CarrinhoTitulo>
          <CarrinhoCompleto>
            {currentSale.length === 0 ? (
              <>
                <h1>Sua sacola está vazia</h1>
                <p>Adicione itens</p>
              </>
            ) : (
              <>
                <Cart
                  currentSale={currentSale}
                  cartTotal={cartTotal}
                  setCurrentSale={setCurrentSale}
                  removeCart={removeProduct}
                  removerTodos={removeTodos}
                />
              </>
            )}
          </CarrinhoCompleto>

          <ValorOption>
            <Paragrafos>
              <p>Valor Total:</p>
              <p>R${cartTotal},00</p>
            </Paragrafos>

            <button onClick={(event) => removeTodos(event)}>
              Remover Todos
            </button>
          </ValorOption>
        </PaiDoCarrinho>
      </PaiDeTodos>
    </div>
  );
}

export default App;
