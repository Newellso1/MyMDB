import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function MovieInfo({ movieInfo, toggleShowInfo }) {
  return (
    <div className="absolute z-40 flex flex-col gap-3 justify-center items-center bg-violet-600 bg-opacity-25 h-dvh w-dvw">
      <div className="bg-violet-300 w-9/12 md:w-fit px-3 py-5 rounded-md text-center flex flex-col items-center gap-3 shadow-lg shadow-violet-900">
        <h1 className="font-bold text-xl">
          {movieInfo.Title} - {movieInfo.Year}
        </h1>
        <img src={movieInfo.Poster} alt={movieInfo.Title} className="w-60" />
        <p className="leading-snug text-sm md:w-80">{movieInfo.Plot}</p>
        <div>
          <h4 className="font-bold">Main Cast</h4>
          <p className="leading-snug text-sm">{movieInfo.Actors}</p>
        </div>
        <div>
          <h4 className="font-bold">Awards</h4>
          <p className="leading-snug text-sm">{movieInfo.Awards}</p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="text-violet-300 bg-violet-600 rounded-full text-4xl shadow-md shadow-violet-900"
          onClick={toggleShowInfo}
        />
      </div>
    </div>
  );
}
