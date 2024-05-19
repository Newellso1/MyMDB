import { useState } from "react";
import Favourites from "./Components/Favorites";
import Search from "./Components/Search";

function App() {
  const [favouritesOpen, setFavouritesOpen] = useState(false);
  const handleFavouritesOpen = () => setFavouritesOpen(!favouritesOpen);
  return (
    <div className="App text-violet-950 bg-gradient-to-tr from-violet-600 to-violet-300 h-screen w-screen flex justify-center items-center">
      <Search favouritesOpen={favouritesOpen} />
      <Favourites
        favouritesOpen={favouritesOpen}
        handleFavouritesOpen={handleFavouritesOpen}
      />
    </div>
  );
}

export default App;
