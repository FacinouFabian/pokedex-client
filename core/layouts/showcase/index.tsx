import * as React from "react";
import Head from "next/head";

import Nav from "@/components/Nav";

type Props = {
  children?: React.ReactNode;
  title?: string;
  className: string;
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  children,
  className,
}): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>{title || "Pokédex"}</title>
      </Head>

      <div className={`pokedex-header ${className}`}>
        <img src={"logo.png"} alt="" />
      </div>
      <Nav />
      <main className={`layout ${className}`}>{children}</main>
    </>
  );
};

export default Layout;
