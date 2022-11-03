import {func} from "prop-types";
import React, {useState} from "react";

function App() {
    const [name, changeName] = useState('');
    const [name2, changeName2] = useState('');

    function change(event) {
        let val = event.target.value;
        changeName(val)

    }

    function change2(event) {
        changeName2(name);
        event.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={change2}>
                <h1>Hello {name2}
                </h1>
                <input
                    onChange={change}
                    type="text"
                    value={name}
                    placeholder="What's your name?"/>
                <button type="submit">Submit</button>
            </form>

        </div>

    );
}

export default App;
