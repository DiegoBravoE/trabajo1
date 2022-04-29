import React, { useState } from 'react';
import quotebox from '../quotebox'


const colors=[
 "aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow",
"aquamarine","yellow","chocolate","coral", "aquamarine","yellow","chocolate","coral","green","blueviolet","greenyellow"
]

const QuoteBox = () => {
    const randomquote = Math.floor(Math.random() * quotebox.length);
   const [next,setNext]=useState(randomquote)
   const nextPhrase =()=> {
         
    const randomquote = Math.floor(Math.random() * quotebox.length);
 
    setNext (randomquote);
}
const randomcolors = Math.floor(Math.random() * quotebox.length);
     document.body.style =`background:${colors[randomcolors]}`

    return (
        <div className="card" style={{background:"white" }} >
            <div  >
                <div className="text" style={{color: colors[randomcolors]}}   >
                    <p>"{quotebox[next].quote}"</p>
                    <div className="autor"><h4>"{quotebox[next].author}"</h4></div>
                    <div className="button" ><button  onClick={ nextPhrase} ><i className="fa-solid fa-circle-chevron-right"></i></button> </div>
                            
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;