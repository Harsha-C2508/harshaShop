import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CgProfile,CgHeart,CgShoppingCart } from 'react-icons/cg';
import Styles from '../style/navbar.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {isLight,toggleTheme} = useContext(ThemeContext)
  const {isAuth,logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handlelogin=()=>{
        if(isAuth){
            logout();
            navigate("/")
        }
        else{
            navigate("/login")
        }
    }
  
  return (
    <div className={Styles.box}>
      <img src="https://res.cloudinary.com/teepublic/image/private/s--GnNKtNtt--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_auto,h_630,q_90,w_630/v1606456272/production/designs/16562154_0.jpg" alt="logo" className={Styles.logo}/>
      <div className={Styles.sechead}>
      <Link to='/' className={Styles.link}>Home</Link>
      <Link to='/painting' className={Styles.link}>Painting</Link>
      <Link to='/wishlist' className={Styles.link}><CgHeart/></Link>
      <Link to='/cart' className={Styles.link}><CgShoppingCart/></Link>
      <Link to='/login' className={Styles.linked} onClick={handlelogin}><CgProfile/></Link>
      <button 
            className={Styles.button} 
            onClick={toggleTheme}>
              {` ${
                isLight ? "Dark":"Light"
              }`}</button>
      </div>
    </div> 
  )
}
export default Navbar