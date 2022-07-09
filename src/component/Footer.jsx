import React from 'react'
import Styles from '../style/footer.module.css'
import {MdEmail} from 'react-icons/md'
import {FaQuestion,FaTwitter,FaInfo,FaFacebook,FaFacebookMessenger,FaPinterestP,FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className={Styles.contain}>
      <div className={Styles.connect}>
        <h4><MdEmail/> Email</h4>
        <h4><FaQuestion/> FAQ page</h4>
        <h4><FaInfo/><Link to="/about" className={Styles.link}> About</Link></h4>
      </div>
      <div className={Styles.p}>
        <p>© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.Only Customers will receive cashback on qualifying purchases.</p>
        <p>UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.</p>
        <p>Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy | Shipping Information</p>
      </div>
      <div className={Styles.social}>
       <p> <FaFacebook/> Facebook</p>
        <p><FaFacebookMessenger/> Messenger</p>
        <p><FaPinterestP/> Pinterest</p>
        <p><FaLinkedinIn/> LinkedIn</p>
        <p><FaTwitter/> Twitter</p>
      </div>
    </div>
  )
}

export default Footer