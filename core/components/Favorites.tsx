import * as React from "react";
import Card from "./Card";

const Favorites: React.FunctionComponent = (): JSX.Element => {
  const [favorites, setFavorites] = React.useState<any[]>([]);

  const getFavorites = () => {
    const result = localStorage.getItem("favorites");

    if (result) {
      const parsed = JSON.parse(result);
      setFavorites(parsed);
    }
  };

  const deleteFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  };

  React.useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="body">
      <div className="wrapper1 bg-light">
        <div
          style={{
            width: "100%",
            paddingTop: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={deleteFavorites} className="btn btn-primary">
            Supprimer mes favoris
          </button>
        </div>
        <div
          style={{
            width: "20%",
            margin: "auto",
            paddingTop: 30,
            paddingBottom: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        ></div>
        <div>
          {favorites.length > 0 &&
            favorites.map((pokemon: any, key: number) => (
              <Card name={pokemon.nom} ndex={pokemon.ndex} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
