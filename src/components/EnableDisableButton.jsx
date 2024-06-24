import React, { useState } from 'react';

function EnableDisableButton() {
  const [inputValue, setInputValue] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [value, setvalue] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsButtonEnabled(value.length > 0); // Enable the button if input is not empty
  };
  function changehandler(){
    console.log("hit button")
    setvalue(inputValue)
  }

  return (
    <div>
      <h1>Enable/Disable Button Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something to enable the button..."
      />
      <button disabled={!isButtonEnabled} onClick={changehandler}>
        {isButtonEnabled ? 'Enabled' : 'Disabled'}
      </button>
      <p>{value}</p>
    </div>
  );
}

export default EnableDisableButton;
