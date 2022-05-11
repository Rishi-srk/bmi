import {useState} from 'react';

function Collapse(){
let [isOpen,setisOpen]=useState(false);
return(
    <div>
        <button className='btn btn-primary toggle  ms-3 ' onClick={()=>setisOpen(!isOpen)}>How to Play</button>
        {
            isOpen &&<div className='content ms-2 bold'>
                <ol>
                    <li>A Country name has been given to you</li>
                    <li>Enter a alphabet if that is present in the country's name it will be revealed</li>
                    <li>For Every Wrong Guess You will lose a chance</li>
                    <li>Guess the country name within the 5 chances</li>
                </ol>
                
                </div>
        }
    </div>
)

}
export default Collapse;