import React, { useState } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const calculateSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <h1>Sum of Two Numbers</h1>
      <div>
        <label>
          Number 1:
          <input 
            type="Number" 
            value={num1} 
            onChange={handleNum1Change} 
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input 
            type="Number" 
            value={num2} 
            onChange={handleNum2Change} 
          />
        </label>
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      <h2>Sum: {sum}</h2>
    </div>
  );
}

export default SumComponent;
