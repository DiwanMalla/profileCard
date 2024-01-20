import { useState } from "react";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const PartThree = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const getCurrentDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);
    return currentDate;
  };

  const dayIndex = getCurrentDate().getDay() % 7;
  const day = weekdays[dayIndex];

  const month = getCurrentDate().toLocaleString("default", { month: "short" });
  const date = getCurrentDate().getDate();
  const year = getCurrentDate().getFullYear();
  const handleSubtractStep = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleAddStep = () => {
    setStep(step + 1);
  };

  const handleSubtractCount = () => {
    setCount(count - step * 1);
  };
  const handleAddCount = () => {
    setCount(count + step * 1);
  };
  return (
    <div className="flex justify-center">
      <div id="wrapper" className="">
        <div id="step" className="flex">
          <button
            onClick={() => {
              handleSubtractStep();
            }}
          >
            -
          </button>
          <p>{`Step:${step}`}</p>
          <button
            onClick={() => {
              handleAddStep();
            }}
          >
            +
          </button>
        </div>
        <div id="count" className="flex">
          <button
            onClick={() => {
              handleSubtractCount();
            }}
          >
            -
          </button>
          <p>{`Count:${count}`}</p>
          <button
            onClick={() => {
              handleAddCount();
            }}
          >
            +
          </button>
        </div>
        <div>
          {count == 0 && `Today is ${day} ${month} ${date} ${year}`}
          {count != 0 && (
            <div id="message">{`${count > 0 ? count : -count}${
              count > 0 ? " days from today" : " days ago"
            } days is ${day} ${month} ${date} ${year}`}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartThree;
