import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "@/layouts/styles/pokemons.css";
import "@/layouts/styles/single-pokemon.css";
import "@/layouts/styles/index.css";
import Theme, { ThemeProvider } from "@/core/contexts/themeContext";

type Props = {
  // the active page
  Component: any;
  // object with the initial props that were preloaded for your page
  pageProps: unknown;
};

/**
 * @pages MyApp
 * @description component to initialize pages
 *
 * @param {Props}
 * @return the active page overriding with props
 *
 */
const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
  return (
    <React.StrictMode>
      <ThemeProvider {...Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default MyApp;
