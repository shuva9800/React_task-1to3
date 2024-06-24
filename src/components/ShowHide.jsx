import React, { useState } from 'react'

export default function ShowHide() {

  const[isVisiable, setVisible] = useState(true)
  function togglebutton(){
    setVisible(!isVisiable);
  }

  return (
    <div>
    <h1>Show/Hide button</h1> 
       <div>{
          isVisiable && (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>)
        }</div>

        <button onClick={togglebutton}>{isVisiable?"Hide" : "Show"}</button>

     
    </div>
  )
}
