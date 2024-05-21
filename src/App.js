import { useEffect, useState } from "react";
import Favourites from "./Components/Favorites";
import Search from "./Components/Search";
import MovieList from "./Components/MovieList";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [favouritesOpen, setFavouritesOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("movie");
  const [watchedList, setWatchedList] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=4a3b711b`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [searchQuery]);

  const handleFavouritesOpen = () => setFavouritesOpen(!favouritesOpen);

  const handleAddToFavourites = (movie) => {
    const isAlreadyAdded = favourites.some(
      (favorite) => favorite.imdbID === movie.imdbID
    );

    if (!isAlreadyAdded) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
    }
  };

  const handleDeleteFavourite = (imdbID) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  const handleWatched = (movie) => {
    const isAlreadyWatched = watchedList.some(
      (watched) => watched.imdbID === movie.imdbID
    );

    if (!isAlreadyWatched) {
      const newWatchedList = [...watchedList, movie];
      setWatchedList(newWatchedList);
    }
  };

  const handleDeleteWatched = (imdbID) => {
    setWatchedList((prevWatchedList) =>
      prevWatchedList.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  return (
    <div className="App flex flex-col gap-4 text-violet-950 bg-gradient-to-tr from-violet-600 to-violet-300 h-screen w-screen  justify-center items-center p-10">
      <div className="flex flex-col gap-4 h-screen p-10 z-10">
        <Search
          favouritesOpen={favouritesOpen}
          setSearchQuery={setSearchQuery}
        />
        <MovieList
          list={movies}
          handleClick={handleAddToFavourites}
          button={faPlus}
          favourites={favourites}
          favouritesOpen={favouritesOpen}
          watchedList={watchedList}
          handleWatched={handleWatched}
        />
      </div>
      <Favourites
        favouritesOpen={favouritesOpen}
        handleFavouritesOpen={handleFavouritesOpen}
        favourites={favourites}
        button={faMinus}
        handleDeleteFavourite={handleDeleteFavourite}
        watchedList={watchedList}
        handleWatched={handleWatched}
        handleDeleteWatched={handleDeleteWatched}
      />
    </div>
  );
}

export default App;
