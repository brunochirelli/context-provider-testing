import { render, screen } from "@testing-library/react";
import Home from "../src/pages";
import { ProductContext } from "../src/providers/ProductProvider";

describe("Home", () => {
  it("should display products", () => {
    render(
      <ProductContext.Provider
        value={{
          products: [
            {
              title: "Produto",
              category: "categoria",
              description: "description",
              id: 1,
              image: "",
              price: 10,
              rating: {
                count: 10,
                rate: 5,
              },
            },
          ],
        }}
      >
        <Home />
      </ProductContext.Provider>
    );

    expect(screen.getByText("Produto")).toBeInTheDocument();
  });
});
