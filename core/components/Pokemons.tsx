import * as React from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/core/contexts/themeContext";

import Card from "./Card";
import Type from "./Type";

const Pokemons: React.FunctionComponent = (): JSX.Element => {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  const [colors, setColors] = React.useState<any>([]);
  const [pokemonName, setPokemonName] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const router = useRouter();
  const [theme] = useTheme();

  const urlTypes = "http://localhost:3000/types/";
  const url = "http://localhost:3000/pokemon/";

  const pokemonsTypes = [
    "normal",
    "feu",
    "eau",
    "plante",
    "électrique",
    "insecte",
    "roche",
    "sol",
    "acier",
    "poison",
    "combat",
    "spectre",
    "psy",
    "glace",
    "dragon",
    "vol",
  ];

  const tab = pokemonsTypes;

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

  const fetchColors = async () => {
    const response = await fetch("https://efrei-pokeapi.herokuapp.com/colors", {
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    setColors(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const name =
      input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    setPokemonName(name);
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const link = url + pokemonName;
    window.location.href = link;
    event.preventDefault();
  };

  const handleShow = (event: React.MouseEvent<HTMLInputElement>) => {
    const buttons = document.getElementsByClassName(
      "buttons"
    )[0] as HTMLDivElement;
    const filterButton = document.getElementsByClassName(
      "filterButton"
    )[0] as HTMLInputElement;
    if (show === true) {
      setShow(false);
      buttons.style.display = "block";
      filterButton.value = "Cacher";
      event.preventDefault();
    } else {
      setShow(true);
      buttons.style.display = "none";
      filterButton.value = "Filtres";
    }
  };

  const handleType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    const newT = button.value;
    const newRef =
      newT.charAt(0).toUpperCase() + newT.substring(1).toLowerCase();
    window.location.href = urlTypes + newRef;
    event.preventDefault();
  };

  React.useEffect(() => {
    fetchPokemons();
    fetchColors();
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
      <input
        className="btn btn-danger filterButton"
        onClick={handleShow}
        type="reset"
        value="Cacher/Montrer filtres"
      ></input>
      <div className="buttons">
        {tab.map((type, key) => (
          <Type
            key={key}
            type={type}
            color={colors[type]}
            onClick={handleType}
          />
        ))}
      </div>
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
