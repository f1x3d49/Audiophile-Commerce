import React, { useState } from "react";

const NumberInput = () => {
  const [counter, setCounter] = useState(1);

  // decrement function
  const decrementCount = () => {
    if (counter === 0) {
      return null;
    } else {
      setCounter(counter - 1);
    }
  };

  // increment function
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  return (
    <form className="w-[120px] h-[48px] flex-shrink-0 flex items-center justify-center bg-color3">
      <div className="relative flex items-center justify-center gap-4 w-full h-full">
        <button
          type="button"
          id="decrement-button"
          className="text-color7 hover:text-color1 opacity-25 hover:opacity-100 sub-title"
          onClick={decrementCount}
        >
          -
        </button>

        <p className="sub-title text-color7">{counter}</p>
        <button
          type="button"
          id="increment-button"
          className="text-color7 hover:text-color1 opacity-25 hover:opacity-100 sub-title"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </form>
  );
};

export default NumberInput;
