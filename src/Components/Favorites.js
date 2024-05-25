import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import MovieList from "./MovieList";

export default function Favourites({
  handleFavouritesOpen,
  favouritesOpen,
  favourites,
  button,
  handleDeleteFavourite,
  watchedList,
  handleWatched,
  handleDeleteWatched,
}) {
  return (
    <div
      className={`absolute flex justify-end  w-screen gap-0 transition-all ${
        favouritesOpen ? `z-20` : ``
      } ${favouritesOpen ? `drop-shadow-xl` : `drop-shadow-lg`} `}
    >
      <div className="h-fit bg-violet-200 rounded-bl-xl transition-all ">
        <h2
          onClick={handleFavouritesOpen}
          className="flex justify-center text-3xl p-2"
        >
          <FontAwesomeIcon icon={faHeart} />
        </h2>
      </div>
      <div
        className={`bg-violet-200   h-screen rounded-bl-xl flex justify-center items-start pt-10  overflow-y-scroll  ${
          favouritesOpen ? `w-screen` : `w-0`
        }`}
      >
        {favouritesOpen && (
          <>
            <div className="">
              <p className="text-center mb-4 px-10">
                {favourites.length > 0
                  ? `You have watched ${watchedList.length} out of ${favourites.length}
                of your favorite movies`
                  : "Favourite movies to keep track of which ones you have watched"}
              </p>

              <MovieList
                list={favourites}
                button={button}
                handleClick={(movie) => handleDeleteFavourite(movie.imdbID)}
                favouritesOpen={favouritesOpen}
                watchedList={watchedList}
                handleWatched={handleWatched}
                handleDeleteWatched={handleDeleteWatched}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
