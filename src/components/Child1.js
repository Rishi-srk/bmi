import { useState } from 'react'

function Child1(props){

   let [childdata,senddata]=useState('hihellohwru')

    return(
        <div>
            <h1>child 1</h1>
            <h1>{props.x}</h1>
          <button className='btn btn-danger' onClick={()=>props.getData(childdata)}>Sendtoparent</button>
        </div>
    )
}
export default Child1