import React, { useState } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setSum(sum);
  };

  return (
    <div>
      <h1>Sum of Two Numbers</h1>
      <div>
        <label>
          Number 1:
          <input 
            type="text" 
            value={num1} 
            onChange={handleNum1Change} 
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input 
            type="text" 
            value={num2} 
            onChange={handleNum2Change} 
          />
        </label>
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}

export default SumComponent;
