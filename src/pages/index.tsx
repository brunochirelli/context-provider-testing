/** @jsxImportSource theme-ui */

import { ReactElement } from "react";
import { Box, Container, Grid, Heading, Image, Text } from "theme-ui";
import Product from "../components/Product";
import MainLayout from "../layouts/MainLayout";
import { useProducts } from "../providers/ProductProvider";

const Home = () => {
  const { products, isLoadingProducts } = useProducts();

  return (
    <Container p="24px" variant="container.default">
      {isLoadingProducts ? (
        <Box>Loading...</Box>
      ) : (
        <Grid columns={[2, 2, 3, 3, 4]}>
          {products?.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
