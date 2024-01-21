import { useState } from "react";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TripList = () => {
  const [Quantity, setQuantity] = useState<number | undefined>();
  const [Description, setDescription] = useState("");

  const HandleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const itemDetails = { Quantity, Description, packed: false };
    setTimeout(() => {
      fetch("https://retoolapi.dev/GtUvs2/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemDetails),
      });
    });
  };

  return (
    <div>
      <div
        id="wrapper"
        className="sm:flex sm:gap-2 sm:justify-center text-center p-2"
        style={{ backgroundColor: " #cc6600" }}
      >
        <h2>What do you need for your🥰 trip?</h2>

        <form className="flex justify-center gap-3" onSubmit={HandleSubmit}>
          <select
            className="rounded-lg w-[50px] text-center p-1"
            style={{ backgroundColor: "#ffebcc" }}
            value={Quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
              alert(Quantity);
            }}
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
