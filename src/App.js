import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  function removeSpecials(str) {
    str = str.replace(/[ÀÁÂÃÄÅ]/g, "A");
    str = str.replace(/[àáâãäå]/g, "a");
    str = str.replace(/[ÈÉÊË]/g, "E");
    str = str.replace(/[èéêë]/g, "e");
    str = str.replace(/[ÍÌÎ]/g, "I");
    str = str.replace(/[íìî]/g, "i");
    str = str.replace(/[ÒÓÔÕÖ]/g, "O");
    str = str.replace(/[òóôõö]/g, "o");
    str = str.replace(/[ÙÚÛ]/g, "U");
    str = str.replace(/[úùû]/g, "u");
    str = str.replace(/[Ç]/g, "C");
    str = str.replace(/[ç]/g, "c");
    str = str.replace(/[ÍÌÎ]/g, "I");
    str = str.replace(/[íìî]/g, "i");

    return str.replace(/[^a-z0-9]/gi, "");
  }

  function showProducts() {
    return InputValue.split("").length < 1
      ? setFilteredProducts(products)
      : products.some(
          (product) =>
            (removeSpecials(product.name.toLowerCase()).includes(
              removeSpecials(InputValue.toLowerCase())
            ) ||
              removeSpecials(product.category.toLowerCase()).includes(
                removeSpecials(InputValue.toLowerCase())
              )) === true
        )
      ? setFilteredProducts(
          products.filter(
            (product) =>
              removeSpecials(product.name.toLowerCase()).includes(
                removeSpecials(InputValue.toLowerCase())
              ) ||
              removeSpecials(product.category.toLowerCase()).includes(
                removeSpecials(InputValue.toLowerCase())
              )
          )
        )
      : alert("Nenhum Resultado Encontrado");
  }

  function removeProduct(product) {
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
  }

  return (
    <div className="App">
      <Header
        InputValue={InputValue}
        setInputValue={setInputValue}
        filtered={showProducts}
        filteredProducts={filteredProducts}
      />
      <div className="cards">
        <ProductsList products={products} />

        <div className="carrinho">
          <h1>Carrinho de compras</h1>
          {currentSale.length === 0 ? (
            <>
              <h1>Sua sacola está vazia</h1>
              <p>Adicione itens</p>
            </>
          ) : (
            <Cart
              currentSale={currentSale}
              cartTotal={cartTotal}
              setCurrentSale={setCurrentSale}
              removeCart={removeProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
