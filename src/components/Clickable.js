import React from 'react'

function Clickable() {
    function handleClick() {
    //  console.log("click");
    }
    return <button onClick={handleClick}>Click Me</button>;
  }

  export default Clickable;