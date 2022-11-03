import React, {useState} from "react";

function App() {
    const [name,changeName] = useState("");
    const [name2,changeName2] = useState("");
  
    function change(e){
      let val = e.target.value;
      changeName(val)
    }
    function change2(e){
      changeName2(name)
    }


    return (
        <div className="container">
            <h1>Hello {name2}</h1>
            <input type="text"
            onChange={change}
             placeholder="What's your name?"

             />
            <button
            onClick={change2}
            >Submit</button>
        </div>
    );
}

export default App;
