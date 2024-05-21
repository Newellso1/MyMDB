import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Watched({
  movie,
  watchedList,
  handleWatched,
  handleDeleteWatched,
}) {
  const isAlreadyWatched = watchedList.some(
    (watched) => watched.imdbID === movie.imdbID
  );
  return (
    <div className="flex justify-around text-2xl mt-1 transition-all">
      <FontAwesomeIcon
        icon={faCheck}
        className={`${
          isAlreadyWatched ? `text-green-500` : `cursor-pointer`
        } transition-all`}
        onClick={() => handleWatched(movie)}
      />
      <FontAwesomeIcon
        icon={faXmark}
        className={`${
          isAlreadyWatched ? `text-red-500 cursor-pointer` : ``
        } transition-all`}
        onClick={() => handleDeleteWatched(movie.imdbID)}
      />
    </div>
  );
}
