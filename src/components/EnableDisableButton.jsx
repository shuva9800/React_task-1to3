import React, { useState } from 'react';

function EnableDisableButton() {
  const [inputValue, setInputValue] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsButtonEnabled(value.trim().length > 0); // Enable button if input is not empty
  };

  return (
    <div>
      <h1>Enable/Disable Button</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button disabled={!isButtonEnabled}>Submit</button>
    </div>
  );
}

export default EnableDisableButton;
