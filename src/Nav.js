import React, { useEffect, useState } from 'react'
import "./Nav.css"
import NextflixLogo from "./nextflix-high-resolution-logo-transparent.png"
import { useHistory } from 'react-router-dom';
function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
            <img onClick={() => history.push('/')} className="nav__logo"src={NextflixLogo} alt="" />
            <img onClick={() => history.push('/profile')} className="nav__avatar" src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
        </div>
    </div>
  )
}

export default Nav