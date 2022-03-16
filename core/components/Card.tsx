import * as React from "react";
import Link from "next/link";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

type Props = {
  ndex: string;
  name: string;
};

const Card: React.FunctionComponent<Props> = ({
  ndex,
  name,
}: Props): JSX.Element => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  const getPokemon = async (ndex: string) => {
    const response1 = await fetch(
      `https://efrei-pokeapi.herokuapp.com/pokemons/${ndex}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const pokemon = await response1.json();

    return pokemon;
  };

  const addPokemon = async (ndex: string) => {
    const pokemon = await getPokemon(ndex);

    localStorage.setItem("favorites", JSON.stringify([pokemon]));
  };

  const updateFavorites = async (isInArray: boolean, parsed: any[]) => {
    if (isInArray) {
      for (let i = 0; i < parsed.length; i++) {
        parsed[i].ndex === ndex && parsed.splice(i, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(parsed));
    } else {
      const pokemon = await getPokemon(ndex);
      parsed.push(pokemon);

      localStorage.setItem("favorites", JSON.stringify(parsed));
    }

    return parsed;
  };

  const handleFavorite = async () => {
    const result = localStorage.getItem("favorites");

    if (result) {
      const parsed = JSON.parse(result);
      const findPokemon = (pokemon: any) => pokemon.ndex === ndex;
      const isInArray = parsed.some(findPokemon);

      updateFavorites(isInArray, parsed);
    } else {
      addPokemon(ndex);
    }

    setIsFavorite(!isFavorite);
  };

  const pokemonIsFavorite = () => {
    const result = localStorage.getItem("favorites");
    let isInArray = false;

    if (result) {
      const parsed = JSON.parse(result);
      const findPokemon = (pokemon: any) => pokemon.ndex === ndex;
      isInArray = parsed.some(findPokemon);
    }

    setIsFavorite(isInArray);
  };

  React.useEffect(() => {
    pokemonIsFavorite();
  }, []);

  return (
    <div className="deck">
      <div className="card" key={ndex}>
        <div
          style={{
            width: 15,
            height: 15,
            position: "absolute",
            right: 5,
            top: 5,
          }}
          onClick={handleFavorite}
        >
          {isFavorite ? (
            <AiFillStar color="#FFD700" size={15} />
          ) : (
            <AiOutlineStar color="#FFD700" size={15} />
          )}
        </div>
        <Link
          href={{
            pathname: `/pokemon/[name]`,
            query: {
              name,
            },
          }}
          as={`/pokemon/${name}`}
        >
          <img
            className="card-img-top"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ndex}.png`}
            alt=""
          />
        </Link>
        <div style={{ fontSize: 10, textAlign: "center", padding: 20 }}>
          {name}
        </div>
      </div>
    </div>
  );
};

export default Card;
