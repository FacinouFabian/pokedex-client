import * as React from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/core/contexts/themeContext";

import Card from "./Card";

const Pokemons: React.FunctionComponent = (): JSX.Element => {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  const [pokemonName, setPokemonName] = React.useState<string>("");
  const router = useRouter();
  const [theme] = useTheme();

  const fetchPokemons = async () => {
    const response = await fetch(
      "https://efrei-pokeapi.herokuapp.com/pokemons",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    setPokemons(data);
  };

  const getRandomPokemon = async () => {
    const response = await fetch(
      "https://efrei-pokeapi.herokuapp.com/pokemons/random",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    setPokemons([data]);
  };

  const resetPokemons = () => {
    fetchPokemons();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const name =
      input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    setPokemonName(name);
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    router.push("/pokemon/" + pokemonName);
    event.preventDefault();
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="body">
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            className="input-sm form-control"
            id="search-input"
            placeholder="nom"
            type="text"
            value={pokemonName}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <button
            className="btn btn-primary input-sm form-control"
            id="search-button"
            type="submit"
          >
            Chercher
          </button>
        </div>
      </form>

      <div className={`wrapper1 bg-${theme.value}`}>
        <div
          style={{
            width: "30%",
            margin: "auto",
            paddingTop: 30,
            paddingBottom: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={getRandomPokemon} className="btn btn-danger">
            Aléatoire
          </button>
          <button onClick={resetPokemons} className="btn btn-primary">
            Réinitialiser
          </button>
        </div>
        <div>
          {pokemons.length > 0 &&
            pokemons.map((pokemon: any, key: number) => (
              <Card name={pokemon.nom} ndex={pokemon.ndex} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
