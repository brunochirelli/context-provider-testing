/** @jsxImportSource theme-ui */

import NextLink from "next/link";
import { Box, Link, Text } from "theme-ui";

import { BiCart } from "react-icons/bi";
import { useCart } from "../providers/CartProvider";

const Header = () => {
  const { cart } = useCart();

  return (
    <header
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "repeat(3, 1fr)",
        px: 3,
        py: 2,
        alignItems: "center",
        variant: "styles.header",
      }}
    >
      <button
        title="Toggle Menu"
        sx={{
          appearance: "none",
          width: 32,
          height: 32,
          m: 0,
          p: 1,
          color: "inherit",
          bg: "transparent",
          border: 0,
          ":focus": {
            outline: "2px solid",
          },
          ":hover": {
            color: "primary",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentcolor"
          viewBox="0 0 24 24"
          sx={{
            display: "block",
            margin: 0,
          }}
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextLink href={"/"} passHref>
          <Link
            sx={{
              variant: "styles.navlink",
              px: 3,
              py: 1,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              border: "4px solid",
              color: "primary",
              fontWeight: "bolder",
            }}
          >
            Context Commerce
          </Link>
        </NextLink>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {cart && <Text>Total: {cart.total}</Text>}

          <NextLink href={cart.products.length > 0 ? "/cart" : "/"} passHref>
            <Link
              sx={{
                variant: "styles.navlink",
                ml: 3,
                py: 3,
                position: "relative",
              }}
            >
              {cart?.products?.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "12%",
                    right: "-6px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "16px",
                    background: "darkblue",
                    userSelect: "none",
                  }}
                >
                  <Text sx={{ color: "white", fontSize: "12px" }}>
                    {cart?.products.length}
                  </Text>
                </Box>
              )}
              <BiCart size={30} />
            </Link>
          </NextLink>
        </Box>
      </div>
    </header>
  );
};

export default Header;
