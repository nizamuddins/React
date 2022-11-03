import {func} from "prop-types";
import React, {useState} from "react";

import List from './list'

function App() {
    const [list1, changelist1] = useState("");
    let [list, changelist] = useState([]);

    function changing(e) {
        let val = e.target.value;
        changelist1(val)
    }

    function change() {

        (list1.length !== 0 && (changelist((prev) => {
            return [
                ...prev,
                list1
            ]
        })))
        changelist1("")
    }

    function ondelete(id) {

        changelist((prev) => {
            return prev.filter((a, i) => {

                return i !== id;

            })

        })

    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={changing} type="text" value={list1}/>
                <button onClick={change} type="submit">
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {
                        list.map((todo, index) => {
                            return <List key={index} id={index} text={todo} delete={ondelete}/>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default App;
