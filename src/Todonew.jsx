import React from "react";
import { useState } from "react";
import Tododelete from "./Tododelete";

const Todonew=()=>{
    const [name,setname]=useState();
    const [another,setanother]=useState([]);
    const show=()=>{
        setanother((odder)=>{
        return [...odder,name]})
    }
    const delet=(id)=>{
        setanother((odder)=>{
            return odder.filter((arrEitem,index)=>{
                return index!=id;
            })
        })
    }
    return(
        <div>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={()=>show()}>show</button>
        {
            another.map((e,i)=>{
              return <Tododelete text={e} id={i} key={i} onselect={delet}/>
            }
            )
        }
        
        </div>
    )
}
export default Todonew;