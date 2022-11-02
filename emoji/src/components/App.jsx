import React from "react";
import Header  from "./Header";
import emoji from './emojipedia';
import Emojis from './emoj';




function App() {
  return (
        <div>
        <Header />
    <div className="dictionary">

    {emoji.map((a)=>{
      return (
        <Emojis 
          emoj = {a.emoji}
          name={a.name}
          meaning={a.meaning}
        />
    )
    })}
    </div>

    </div>
  )
}

export default App;
