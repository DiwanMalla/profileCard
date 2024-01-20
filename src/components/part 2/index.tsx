import { useState } from "react";

const Number = ["1", "2", "3"];
const Messages = ["You selected 1", "You selected 2", "You selected 3"];

const PartTwo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="flex justify-center mt-10">
          <div id="outer" className="bg-gray-200 w-[400px] ">
            <div
              id="number"
              className="flex ml-[50px] justify-between mr-[50px] mt-[20px]"
            >
              {Number.map((number, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-500 rounded-full w-7 h-7 text-center"
                    style={
                      currentIndex == index
                        ? { background: "blue", color: "white" }
                        : { background: "gray", color: "black" }
                    }
                  >
                    {number}
                  </div>
                );
              })}
            </div>
            <div id="message" className="flex justify-center mt-4">
              {Messages.map((message, index) => {
                return currentIndex == index ? message : "";
              })}
            </div>
            <div id="button" className="m-4 flex justify-between">
              <button
                className=" rounded-lg p-1"
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={() => {
                  handlePrevious();
                }}
              >
                Previous
              </button>
              <button
                className="rounded-lg p-1"
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={() => {
                  handleNext();
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartTwo;
