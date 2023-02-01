import React from 'react'
import style from '../styles/navbar.module.css'
const Navbar = () => {
    
    let today = new Date();
    let current=today.toDateString();
    
  return (
    <div className={style.navContainer}>
        <div className={style.navhome}>Home</div>
        <div className={style.navtitle}>Album APP </div>
        <div>
        <div className={style.navdate}>{current}</div>
        </div>
    </div>
  )
}

export default Navbar