import React, {useState} from "react";
                 
function List(props){
    return  <li id={props.id}  onClick={()=>{
        props.delete(props.id)

    }
        }>{props.text} </li>
}

export default List;