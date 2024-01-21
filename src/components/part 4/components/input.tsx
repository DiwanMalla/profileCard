const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TripList = () => {
  return (
    <div>
      <div
        id="wrapper"
        className="sm:flex sm:gap-2 sm:justify-center text-center p-2"
        style={{ backgroundColor: " #cc6600" }}
      >
        <h2>What do you need for your🥰 trip?</h2>

        <form className="flex justify-center gap-3">
          <select
            className="rounded-lg w-[50px] text-center p-1"
            style={{ backgroundColor: "#ffebcc" }}
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            className="rounded-full pl-4"
            style={{ backgroundColor: "#ffebcc" }}
          />
          <button
            className="rounded-full w-[65px] "
            style={{ backgroundColor: "#00e699", fontWeight: "bold" }}
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripList;
