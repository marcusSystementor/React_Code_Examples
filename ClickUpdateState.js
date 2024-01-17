import { useState } from "react";

const ClickUpdateState = () => {
  const [isNumber, setNumber] = useState(0);

  const Clicked = () => {
    setNumber(5);
  };

  return (
    <div>
      <button onClick={Clicked}>Click me</button>
      <p>Number is {isNumber}</p>
    </div>
  );
};

export default ClickUpdateState;
