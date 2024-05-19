import Movie from "./Movie";

export default function MovieList({ list, handleClick, button }) {
  return (
    <div className="mh-screen overflow-scroll z-30 flex flex-col items-center gap-4 ">
      {list.map((movie) => (
        <Movie
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          url={movie.Poster}
          handleClick={() => handleClick(movie)}
          button={button}
        />
      ))}
    </div>
  );
}
