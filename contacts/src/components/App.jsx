import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Cards from "./Cards"
import array from "./index.js"


function func(arr){

return  (  
    
    <Cards 
    id={arr.id}
    key={arr.id}
    name={arr.name} 
    image={arr.src }
    tel={arr.tel}
    mail={arr.mail}

 />)

}

const App = ()=>{

    return (
        <div  >
            <Header />
           {array.map(func)}

            <Footer />
          
        </div>
    )
}

export default App;