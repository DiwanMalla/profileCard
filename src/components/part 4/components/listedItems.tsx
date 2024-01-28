import { useEffect, useState } from "react";
import Footer from "./footer";

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

interface ListedItemProps {
  refreshList: () => void;
  refreshWindow: boolean;
}
const ListedItems = ({ refreshList, refreshWindow }: ListedItemProps) => {
  const [listedItem, setListedItem] = useState<item[]>([]);
  const [sortOption, setSortOption] = useState<string>(options[0]);
  const [isPacked, setIsPacked] = useState(0);
  const totalLength = listedItem.length;

  useEffect(() => {
    const packedCount = listedItem.reduce(
      (count, item) => (item.packed ? count + 1 : count),
      0
    );
    setIsPacked(packedCount);
  }, [listedItem]);

  const handleDelete = async (itemId: number) => {
    try {
      await fetch(`https://retoolapi.dev/GtUvs2/data/${itemId}`, {
        method: "DELETE",
      });
      refreshList();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

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

  const sortItems = (items: item[]) => {
    switch (sortOption) {
      case "Sort By Added":
        return items.sort((a, b) => a.id - b.id);
      case "Sort By Item Alphabet":
        return items.sort((a, b) => a.Description.localeCompare(b.Description));
      case "Sort By Packed Status":
        return items.sort((a, b) => Number(a.packed) - Number(b.packed));
      default:
        return items;
    }
  };

  const handleClearList = async () => {
    try {
      for (const item of listedItem) {
        await fetch(`https://retoolapi.dev/GtUvs2/data/${item.id}`, {
          method: "DELETE",
        });
        refreshList();
      }
    } catch (error) {
      console.log("Error clearing list:", error);
    }
  };
  useEffect(() => {
    fetch("https://retoolapi.dev/GtUvs2/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListedItem(sortItems(data));
      });
  }, [refreshWindow, sortOption]);

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
            onChange={(e) => setSortOption(e.target.value)}
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
            onClick={handleClearList}
          >
            CLEAR LIST
          </button>
        </div>
      </div>
      <Footer count={totalLength} packed={isPacked} />
    </div>
  );
};

export default ListedItems;
