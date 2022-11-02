import React, { useState } from "react";

function App() {

  let time = new Date().toLocaleTimeString();
  let [val,valChange] = useState(time)
  
  const times = ()=>{
  let time = new Date().toLocaleTimeString();
  valChange(time);
  
  }
setInterval(times,1000)
  return (
    <div className="container">
      <h1>{val}</h1>
      <button onClick={times}>Get Time</button>
    </div>
  );
}

export default App;
