import * as React from "react";

import Pokemons from "@/components/Pokemons";
import Layout from "@/layouts/showcase";
import { useTheme } from "@/core/contexts/themeContext";

const IndexPage = () => {
  const [theme] = useTheme();
  return (
    <Layout title="Pokédex" className={`theme-${theme.value}`}>
      <Pokemons />
    </Layout>
  );
};

export default IndexPage;
