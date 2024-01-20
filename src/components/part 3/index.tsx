import { useState } from "react";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const PartThree = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  const dayIndex = (date.getDay() + count) % 7;
  const day = weekdays[dayIndex];
  const fullDate = date.toLocaleDateString();
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
          {count == 0 && `Today is ${weekdays[date.getDay()]} ${fullDate}`}
          {count != 0 && (
            <div id="message">{`${count > 0 ? count : -count}${
              count > 0 ? " days from today" : " days ago"
            } days is ${day}`}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartThree;
