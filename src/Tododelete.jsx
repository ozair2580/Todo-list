import React from "react";
const Tododelete=(props)=>{
    return(
        <div> 
            <button onClick={()=>props.onselect(props.id)}>x</button><h1>{props.text}</h1>
        </div>
    )
}
export default Tododelete;