import logo from './logo.svg';
import LIst from './LIst';
import './App.css';
import { useState } from 'react';
import Deletecomp from './Deletecomp';
import { useEffect } from 'react';
import Send from './Send';
import Todonew from './Todonew';
import { useDispatch, useSelector } from 'react-redux';
import { Add,increament,decreament,productlist,del,search} from './Redux/Action';
const App=()=> {
  const dispach=useDispatch();
  const  data=useSelector((e)=>e.productdata)
  console.warn("App in data",data)
 const product={
  name:"ok",
  email:"@gmail.com",
  password:"124"
 }

  
   return (
   <div >
  
   <button onClick={()=>dispach(Add(product))}>show</button>
   
   <button onClick={()=>dispach(productlist())}>increament</button>
   
   <button onClick={()=>dispach(decreament())}> decreament</button>
   <input type="text" onChange={(e)=>dispach(search(e.target.value))} />
   {
    data.map((e)=>(
      <div key={e.id}>
      <h1>{e.firstName}   <button onClick={()=>dispach(del(e.id))}>clear now</button>
</h1>
      <h1>{e.lastName}    <button onClick={()=>dispach(del(e.id))}>clear now</button>
</h1></div>
    ))
   }
     </div>
 );
}

export default App;
