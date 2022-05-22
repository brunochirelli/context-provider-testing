import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CartContext, CartProvider } from "../providers/CartProvider";
import Header from "./Header";
import Product from "./Product";

describe("Header", () => {
  it("should display 0 being the total when first mount", () => {
    const { getByText } = render(
      <CartContext.Provider value={{ cart: { products: [], total: 0 } }}>
        <Header />
      </CartContext.Provider>
    );

    expect(getByText("Total: 0")).toBeTruthy();
  });

  it("should display correct amount in total", () => {
    const { getByText } = render(
      <CartContext.Provider value={{ cart: { products: [], total: 10 } }}>
        <Header />
      </CartContext.Provider>
    );

    expect(getByText("Total: 10")).toBeTruthy();
  });

  it("should update total when adding a product", async () => {
    // * Arrange
    const ComponentTree = () => {
      return (
        <CartProvider>
          <Header />
          <Product
            title="Produto"
            price={30}
            category="prod"
            description=""
            id={1}
            image=""
            rating={{ count: 10, rate: 5 }}
          />
        </CartProvider>
      );
    };

    // * Act
    render(<ComponentTree />);

    const addToCartButton = screen.getByRole("button", { name: "add" }); // ?

    expect(screen.getByText(/Total/).innerHTML).toBe("Total: 0");

    fireEvent.click(addToCartButton);

    // * Assert
    await waitFor(() =>
      expect(screen.getByText(/Total/).innerHTML).toBe("Total: 30")
    );
  });
});
