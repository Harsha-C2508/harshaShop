import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Styles from '../style/cart.module.css'
import { CartItem } from '../context/CartContext';

const Cart = () => {
  const {cart,setCart} = useContext(CartItem)
  const [total,setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <div>
      <h1>Total Amount: ₹ {total} </h1>
      <div  className={Styles.box}>
      {cart.map((p)=>(
        <div key={p.id} className={Styles.contain}>
          <div className={Styles.about}>
            <img src={p.img} alt={p.name} className={Styles.img}/>
          </div>
          <div>
            <h3>{p.name}</h3>
            <h4>Price : ₹{p.price}</h4>
            <button onClick={()=>setCart(cart.filter((c)=> c.id !== p.id))}>Remove</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cart