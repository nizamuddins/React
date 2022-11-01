import React from "react";
import Avatar from './Avatar'
import Para from './Para'

const Cards = (props)=>{

  return <div className="contact">
      <div className="box">
      <h2>{props.name}</h2>
      <p className="id">{props.id}</p>

      <Avatar img={props.image} />
      </div>
      <div className="box2">
      <Para tel={props.tel}/>
      <Para tel = {props.mail}/>

      </div>
  </div>
}

export default Cards;
