import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    function showBurger() {
        const navLinks = document.querySelector('nav ul');
        navLinks.parentNode.classList.toggle('nav-active');
    }

  return (
    <>
        <nav>
            <ul>
                <button className="burger" onClick={showBurger}>
                    <i className="fas fa-bars"></i>
                </button>
                <li><Link to="/">ინფორმაცია</Link></li>
                <li><Link to="/MyPower">ჩემი სიმძლავრე</Link></li>
                <li><Link to="/Q&A">Q&A</Link></li>
                <li><Link to="/CalculateYourPower">გამოთვალე შენი სიმძლავრე</Link></li>
            </ul>
        </nav>
    </>
  )
}
