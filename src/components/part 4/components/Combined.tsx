import { useState } from "react";
import TripList from "./input";
import ListedItems from "./listedItems";

const Combined = () => {
  const [refreshList, setRefreshList] = useState(false);
  const refresh = () => {
    setRefreshList((prevList) => !prevList);
  };
  return (
    <div>
      <TripList onItemAdd={() => setRefreshList((prev) => !prev)} />
      <ListedItems refreshList={refresh} refreshWindow={refreshList} />
    </div>
  );
};

export default Combined;
