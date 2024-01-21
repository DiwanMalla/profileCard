const options = [
  "Sort By Added",
  "Sort By Item Alphabet",
  "Sort By Packed Status",
];
const listedItems = () => {
  return (
    <div>
      <div id="wrapper" className="" style={{ backgroundColor: "#802b00" }}>
        <div className="text-white text-center h-[500px]">
          <h2>Items</h2>
        </div>
        <div className="flex gap-3 justify-center ">
          <select
            className="mb-3 rounded-lg p-2"
            style={{
              backgroundColor: "#ffebcc",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <button
            className="mb-3 rounded-lg p-2"
            style={{
              backgroundColor: "#ffebcc",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            CLEAR LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default listedItems;
