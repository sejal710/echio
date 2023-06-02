import React from 'react';
import style from '../css/navbar.module.css'; 
import { FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const classNames = [style.center, style.underline].join(' ');
  return (
    <div className={style.navbar}>
      <div className={style.leftCorner}>Logo</div>
      <div className={style.centerd}>
      <div className={style.center}>Home</div>
      <div className={classNames}>Campaign</div>
      </div>
      <div className={style.rightCorner}>
        <FaBell />
        <FaUser />
      </div>
    </div>
  );
}

export default Navbar;
