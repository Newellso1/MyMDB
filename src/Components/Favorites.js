import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Favourites({ handleFavouritesOpen, favouritesOpen }) {
  return (
    <div
      className={`absolute flex justify-end  w-screen gap-0 transition-all ${
        favouritesOpen ? `drop-shadow-xl` : `drop-shadow-lg`
      } `}
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
        className={`bg-violet-200    h-screen rounded-bl-xl flex justify-center items-center  ${
          favouritesOpen ? `w-screen` : `w-0`
        }`}
      >
        {favouritesOpen && <h2>list</h2>}
      </div>
    </div>
  );
}
