import React, { useState } from 'react'

export default function CounterApp() {
    const [currentvalue , setvalue] =useState(0);
    function updatevalue(){
        setvalue(currentvalue +1)
    }
    function decrement(){
        setvalue(currentvalue -1)
    }
  return (
    
    <div>
        <h2>CounterApp</h2>
        <div>
            <button onClick={updatevalue}>Increment</button>
            <p>current value:{currentvalue}</p>
            <button onClick={decrement}>Decrement</button>

        </div>
    </div>
  )
}
