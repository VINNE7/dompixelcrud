import "../styles/global.css";
import type { AppProps } from "next/app";
import { ProductsProvider } from "../contexts/ProductsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  );
}

export default MyApp;
