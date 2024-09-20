import React from 'react';
import './NavLinks.scss'

const NavLinks = ({toggleMobNav}) => {
    return (
        <nav className='nav-links'>
            <ul>
                <li>
                    <a href="#home" className='nav-link-item' onClick={toggleMobNav}>Home</a>
                </li>
                <li>
                    <a href="#about" className='nav-link-item' onClick={toggleMobNav}>about</a>
                </li>
                <li>
                    <a href="#projects" className='nav-link-item' onClick={toggleMobNav}>projects</a>
                </li>
                <li>
                    <a href="#contact" className='nav-link-item' onClick={toggleMobNav}>contact</a>
                </li>

            </ul>
        </nav>
    )
}

export default NavLinks
