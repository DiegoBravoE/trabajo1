import React, { useState } from 'react';
import quotebox from '../quotebox'

const colors=[
  
    "blue"	,   
    "blueviolet",	
   " brown"	,
    "yellow",	 	
    "chocolate"	 ,
    "coral	",
    	 
  	]

const QuoteBox = () => {
    const randomquote = Math.floor(Math.random() * quotebox.length);
   const [next,setNext]=useState(randomquote)
   const nextPhrase =()=> {
         
    const randomIndex = Math.floor(Math.random() * quotebox.length);
 
    setNext (randomquote);
}
const randomcolors = Math.floor(Math.random() * quotebox.length);
     document.body.style =`background:${colors[randomcolors]}`

    return (
        <div className="card" style={{background: colors[randomcolors]}} >
            <div   style={{background: colors[randomcolors]}} >
                <div className="text">
                    <p>"{quotebox[next].quote}"</p>
                    <div className="autor"><h4>"{quotebox[next].author}"</h4></div>
                    <div ><button className="button" onClick={ nextPhrase}  >click</button> </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;