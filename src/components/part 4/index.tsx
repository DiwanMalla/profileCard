import Footer from "./components/footer";
import Header from "./components/header";
import TripList from "./components/input";
import ListedItems from "./components/listedItems";
const TaskList = () => {
  return (
    <div>
      <div>
        <Header />
        <TripList />
        <ListedItems />
        <Footer />
      </div>
    </div>
  );
};

export default TaskList;
