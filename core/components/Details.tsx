import * as React from "react";

import pokemonTypes from "@/core/constants/pokemonTypes";
import Type from "./Type";

type Props = {
  pokemon: any;
  colors: any[];
};

const Pokemons: React.FunctionComponent<Props> = ({
  pokemon,
  colors,
}): JSX.Element => {
  const [pokemonName, setPokemonName] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);

  const urlTypes = "http://localhost:3000/types/";
  const url = "http://localhost:3000/pokemon/";

  const tab = pokemonTypes;

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

  return (
    <div className="body2">
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            className="fabian input-sm form-control"
            id="search-input"
            placeholder="nom ou # numéro"
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
        {tab.map((type: string, key: number) => (
          <Type
            key={key}
            type={type}
            color={colors[type]}
            onClick={handleType}
          />
        ))}
      </div>
      <div className="wrapper2 bg-light">
        <h1>
          {pokemon.nom} # {pokemon.numéro}
        </h1>

        <div id="image" className="card-body">
          <img
            alt=""
            id="pokemon-img"
            className="card-img-top"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
          />
        </div>

        <div id="properties" className="card-body">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Taille</th>
                <th scope="col">poids</th>
                <th scope="col">categorie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-right-solid">{pokemon.taille}</td>
                <td className="border-right-solid">{pokemon.poids}</td>
                <td>{pokemon.espece}</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th colSpan={2}>{`Capacité(s) spéciale(s)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-right-solid">{pokemon.capspe1}</td>
                <td>{pokemon.capspe2}</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th colSpan={2}>{`Faiblesse(s)`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A venir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
