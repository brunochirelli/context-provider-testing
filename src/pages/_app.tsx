import "normalize.css";
import type { AppProps } from "next/app";
import { ProductProvider } from "../providers/ProductProvider";
import { ThemeProvider } from "theme-ui";
import { theme } from "../ui/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { CartProvider } from "../providers/CartProvider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ProductProvider>
          <ThemeProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </ProductProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
