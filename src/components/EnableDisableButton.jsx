import React, { useState } from 'react';

function TextInputWithToggle() {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [text, setText] = useState('');

  const toggleSubmitButton = () => {
    setIsSubmitEnabled(!isSubmitEnabled);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted Text: ${text}`);
    setText('');
  };

  return (
    <div>
      <h1>Submit Input Text</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
      />
      <br /><br />
      <button 
        onClick={handleSubmit} 
        disabled={!isSubmitEnabled}
      >
        Submit
      </button>
      <br /><br />
      <button onClick={toggleSubmitButton}>
        {isSubmitEnabled ? 'Disable Submit Button' : 'Enable Submit Button'}
      </button>
    </div>
  );
}

export default TextInputWithToggle;
