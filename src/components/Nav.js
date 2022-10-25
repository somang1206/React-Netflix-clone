import React from 'react';
import "./Nav.css";




export default function Nav() {
  return (
    <nav className='nav'>
        <img
        alt="netflix_logo"
        src="/img/netflix_logo.png"
        className='nav__logo'
        onClick={()=>window.location.reload()}
        />
        <img
        alt="User logged"
        src="/img/Netflix-avatar.png"
        className="nav__avatar"
        />
    </nav>
  );
}
