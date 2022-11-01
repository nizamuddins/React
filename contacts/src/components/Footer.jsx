import React from "react";

const css = {
    color:"black"
}
const date = new Date();
const year = date.getFullYear();

const Footer = ()=>{

  return <footer>
      <p style={css}>Copy right: &copy; {year}</p>
  </footer>
}

export default Footer;