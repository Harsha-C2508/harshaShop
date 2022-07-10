import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import Styles from '../style/details.module.css'
const Details = () => {
  const [item,setItem] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    if(id){
      fetch(`https://painting-1.herokuapp.com/painting/${id}`)
      .then((r)=>r.json())
      .then((d)=>setItem(d))
    }
  },[id])
  return (
    <div key={item.id} className={Styles.box}>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <h2><label>Price:</label> ₹ {item.price}</h2>
      <h4>{item.des}</h4>
     <Link to='/painting'>Go back</Link>
    </div>
  )
}

export default Details