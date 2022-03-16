import * as React from "react";
import Head from "next/head";

import Nav from "@/components/Nav";
import { useTheme } from "@/core/contexts/themeContext";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  children,
}): JSX.Element => {
  const [theme] = useTheme();
  const [color, setColor] = React.useState(theme.value);

  React.useEffect(() => {
    setColor(theme.value);
  }, [color]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>{title || "Pokédex"}</title>
      </Head>

      <div className={`pokedex-header bg-${theme.value}`}>
        <img src={"logo.png"} alt="" />
      </div>
      <Nav />
      <main className={`layout theme-${color}`}>
        <div className="body">{children}</div>
      </main>
    </>
  );
};

export default Layout;
