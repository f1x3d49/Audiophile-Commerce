import React from "react";

const RadioForm = () => {
  return (
    <div className="w-[309px] h-[56px] flex-shrink-0 flex items-center justify-start gap-4 p-[16px] border-[1px] hover:border-color1 border-[#CFCFCF] bg-color6">
      <input
        type="radio"
        name="e-Money"
        value="e-Money"
        id="money"
        className=""
      />
      <label htmlFor="money">e-Money</label>
    </div>
  );
};

export default RadioForm;
