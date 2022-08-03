import Product from "../Product/Product";

function ProductsList({ products }) {
  console.log(products);
  return (
    <>
      <ul>
        {products.map((item, id) => (
          <Product key={id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
