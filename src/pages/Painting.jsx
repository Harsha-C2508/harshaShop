import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Styles from "../style/paint.module.css"
import { Link } from 'react-router-dom';
import { CgHeart,CgShoppingCart } from 'react-icons/cg';
import { useContext } from 'react';
import { CartItem } from '../context/CartContext';

const Painting = () => {

  const {cart,setCart} = useContext(CartItem)
  const [prod,setProd] = useState([]);
  useEffect(()=>{
    const fetchProduct=async()=>{
      fetch("https://painting-1.herokuapp.com/painting")
      .then((r)=>r.json())
      .then((d)=>{
        setProd(d);
      })
    }
    fetchProduct();
  },[]);
  return (
    <div className={Styles.item}>
      {prod.map((p)=>(
        <div key={p.id} className={Styles.box}> 
             <div className={Styles.about}>
              <img src={p.img} alt={p.name}  className={Styles.img}/>
            </div>
             <div className={Styles.more}>
                <h2>{p.name}{p.nam}</h2>
                <p>Excellent gift item for your family,friends and loving ones</p>
                <h3>Rs {p.price}</h3>
                 <p><Link to={`/painting/${p.id}`} prod={prod}>More details</Link></p>
                <div className={Styles.btn}>
                   <button className={Styles.button} onClick={()=>{setCart([...cart,p])}}>Buy now <CgShoppingCart/></button>
                   <button className={Styles.wish}><CgHeart/></button>
                </div>
             </div>
        </div>
      ))}
    </div>
  )
}

export default Painting