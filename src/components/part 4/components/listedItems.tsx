import { useEffect, useState } from "react";

const options = [
  "Sort By Added",
  "Sort By Item Alphabet",
  "Sort By Packed Status",
];
interface item {
  id: number;
  Description: string;
  Quantity: number;
  packed: boolean;
}

const ListedItems = () => {
  const [listedItem, setListedItem] = useState<item[]>([]);

  const handleDelete = async (itemId: number) => {
    try {
      await fetch(`https://retoolapi.dev/GtUvs2/data/${itemId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetch("https://retoolapi.dev/GtUvs2/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListedItem(data);
      });
  }, []);

  const handleCheckbox = (itemId: number) => {
    const updatedItem = listedItem.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item, packed: !item.packed };
        fetch(`https://retoolapi.dev/GtUvs2/data/${itemId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ packed: updatedItem.packed }),
        });
        return updatedItem;
      }
      return item;
    });
    setListedItem(updatedItem);
  };
  return (
    <div>
      <div id="wrapper" className="" style={{ backgroundColor: "#802b00" }}>
        <div className="text-white text-center h-[500px] flex justify-center gap-6">
          {listedItem.map((items) => (
            <div key={items.id} className="">
              <input
                type="checkbox"
                className="m-2"
                checked={items.packed}
                onChange={() => {
                  handleCheckbox(items.id);
                }}
              />
              <span
                style={
                  items.packed
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >{`${items.Quantity} ${items.Description}`}</span>
              <button
                onClick={() => {
                  handleDelete(items.id);
                }}
              >
                ❌
              </button>
            </div>
          ))}
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

export default ListedItems;
