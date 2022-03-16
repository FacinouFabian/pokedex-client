import * as React from "react";

import Favorites from "@/core/components/Favorites";
import Layout from "@/layouts/showcase";
import { useTheme } from "@/core/contexts/themeContext";

const FavoritesPage = () => {
  const [theme] = useTheme();

  return (
    <Layout title="Favorites" className={`theme-${theme.value}`}>
      <Favorites />;
    </Layout>
  );
};

export default FavoritesPage;
