import Movie from "./Movie";
import Watched from "./Watched";

export default function MovieList({
  list,
  handleClick,
  button,
  favouritesOpen,
  watchedList,
  handleWatched,
  handleDeleteWatched,
  toggleShowInfo,
}) {
  return (
    <div className="snap-y mh-screen overflow-scroll z-30 flex flex-col items-center gap-4 md:flex-wrap md:flex-row md:justify-center ">
      {list.map((movie) => (
        <div key={movie.imdbID} className="movie-list snap-start">
          <Movie
            key={movie.imdbID}
            id={movie.imdbID}
            title={movie.Title}
            url={movie.Poster}
            handleClick={() => handleClick(movie)}
            button={button}
            toggleShowInfo={toggleShowInfo}
          />
          {favouritesOpen && (
            <Watched
              movie={movie}
              watchedList={watchedList}
              handleWatched={handleWatched}
              handleDeleteWatched={handleDeleteWatched}
            />
          )}
        </div>
      ))}
    </div>
  );
}
