import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Movie({
  title = "Movie Title",
  url,
  handleClick,
  button = faPlus,
}) {
  return (
    <>
      <div className="group relative  flex flex-col items-center  text-center ">
        <div className="bg-violet-950 bg-opacity-70 text-violet-200 w-56 flex justify-between px-2 py-1  rounded-t-md absolute opacity-0 transition-all group-hover:opacity-100 ">
          <div className="">
            <FontAwesomeIcon
              icon={faInfo}
              className="hover:text-violet-100 transition-all "
            />
          </div>
          <div>
            <FontAwesomeIcon
              onClick={handleClick}
              icon={button}
              className="hover:text-violet-100 transition-all"
            />
          </div>
        </div>
        <img src={url} alt={title} className=" w-56 rounded-md" />
        <h2 className="bg-violet-900 bg-opacity-70 text-violet-200 font-bold absolute w-56 bottom-0 px-1 opacity-0 group-hover:opacity-100 transition-all rounded-b-md ">
          {title}
        </h2>
      </div>
    </>
  );
}
