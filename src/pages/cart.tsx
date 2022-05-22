import React, { ReactElement } from "react";
import { Container, Grid } from "theme-ui";
import Product from "../components/Product";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../providers/CartProvider";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <Container variant="container.default">
      <h1>Cart</h1>

      <Grid columns={[2, 2, 3, 3, 4]}>
        {cart?.products.map((product) => (
          <Product {...product} key={`cart-${product.id}`} />
        ))}
      </Grid>
    </Container>
  );
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default CartPage;
