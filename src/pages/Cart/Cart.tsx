import { Container, Heading, List, Product, Subtotal } from "./CartStyled";

function App() {
  const title = "Shopping Cart";
  const list = [
    { name: "Bla", price: "123" },
    { name: "Bla 1", price: "123" },
  ];

  return (
    <Container>
      <Heading>{title}</Heading>
      <List>
        {list.length ? (
          <p>There are no products in a cart</p>
        ) : (
          list.map((product) => (
            <Product>
              <h1>{product.name}</h1>
              <span itemProp="price">{product.price}</span>
              <data itemProp="priceCurrency" value="EUR">
                €
              </data>
            </Product>
          ))
        )}
      </List>
      <Subtotal>
        <span itemProp="price">3.50</span>
        <data itemProp="priceCurrency" value="EUR">
          €
        </data>
      </Subtotal>
    </Container>
  );
}

export default App;
