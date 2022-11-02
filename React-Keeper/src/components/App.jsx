import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import notes from './index'


const App = () => {

    return (
        <div>
        <Header />

{notes.map((a)=>{

  return(  <div className="note">
    <Note text = {a.title}/>
    <Note text = {a.content}/>
    </div>
  )
})}

        <Footer />
        </div>
    )

}
export default App;
