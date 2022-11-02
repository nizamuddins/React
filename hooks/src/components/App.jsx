import React, { useState } from "react";

function App() {
let [num,numChange] = useState(0);
function increase(){
  numChange(num+1)
}
function decrease(){
  numChange(num-1)
}


  return (
  <div className="container">
  <h1>{num}</h1>
  <button onClick={decrease}>- </button>
  <button onClick={increase}>+</button>

  </div>
  )
}

export default App;
