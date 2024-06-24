import React, { useState } from 'react';

function TwoWayBinding() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Two-Way Data Binding </h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
      />
      <p>Enter Text: {text}</p>
    </div>
  );
}

export default TwoWayBinding;
