import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import App from './App';
import Delet from './Delet';
const LIst=()=> {
    const [name,setname]=useState("");
    const [other,setother]=useState([]);
   
     const man=()=>{
      setother((olditem)=>{
       return [...olditem,name]
      });}

      const deleteItems=(id)=>{
        setother((olditem)=>{
          return olditem.filter((arrEitem,index)=>{
            return index!==id;
          })
         });
      }
    


    return (
      <div>
        <LIst name={other}/>
         <input value={name} type="text" onChange={(e)=>{setname(e.target.value)}} />
         <button onClick={()=>man()}>x</button>
        {
          other.map((e,i)=>{
        return <Delet id={i} key={i} text={e}
        onselect={deleteItems}/>
          }) }
         
      </div>
    );
  }
  
 
export default LIst;