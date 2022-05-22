import React from "react";
import { Box, Button, Card, Heading, Image, Text } from "theme-ui";
import { BsBagPlus } from "react-icons/bs";
import { Product } from "../providers/ProductProvider";
import { useCart } from "../providers/CartProvider";

const Product = (product: Product) => {
  const { add } = useCart();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "8px",
        border: "1px solid lightgray",
      }}
    >
      <Image
        p={10}
        src={product.image}
        alt={product.title}
        sx={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <Box p="12px" sx={{ flexGrow: 1 }}>
        <Heading sx={{ fontSize: ["12px", "14px"] }}>{product.title}</Heading>
      </Box>

      <Box
        p="12px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{product.price}</Text>
        <Box role={"button"} aria-label="add" onClick={() => add?.(product)}>
          <BsBagPlus />
        </Box>
      </Box>
    </Card>
  );
};

export default Product;
