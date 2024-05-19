export default function Search({ favouritesOpen, setSearchQuery }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-4  `}>
      <h1 className="text-4xl font-bold">MyMDB</h1>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="text-center py-1 drop-shadow-sm transition-all outline-none focus:outline-none focus:drop-shadow-md "
      />
    </div>
  );
}
