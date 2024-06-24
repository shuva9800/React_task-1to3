import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [children, setChildren] = useState([]);

  const addChild = () => {
    setChildren([...children, { id: children.length }]);
  };

  return (
    <div>
      <h1>Dynamic Child Components</h1>
      <button onClick={addChild}>Add Child</button>
      <div>
        {children.map(child => (
          <ChildComponent key={child.id} id={child.id} />
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;
