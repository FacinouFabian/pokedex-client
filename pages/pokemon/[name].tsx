import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PokemonParams } from "interfaces";

import Details from "@/core/components/Details";
import Layout from "@/core/components/Layout";

type Props = {
  pokemon: any;
  colors: any[];
};

const Pokemon: React.FunctionComponent<Props> = ({
  pokemon,
  colors,
}: Props): JSX.Element => {
  return (
    <Layout title={`${pokemon.nom} | Details`}>
      <Details pokemon={pokemon} colors={colors} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://efrei-pokeapi.herokuapp.com/pokemons`, {
    headers: { "Content-Type": "application/json" },
  });
  const pokemons = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = pokemons.map((pokemon: any) => ({
    params: { name: pokemon.nom },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const { name } = context.params as PokemonParams;

  const response1 = await fetch(
    `https://efrei-pokeapi.herokuapp.com/pokemons/${name}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const pokemon = await response1.json();

  const response2 = await fetch("https://efrei-pokeapi.herokuapp.com/colors", {
    headers: { "Content-Type": "application/json" },
  });

  const colors = await response2.json();

  return {
    props: {
      pokemon,
      colors,
    },
  };
};

export default Pokemon;
