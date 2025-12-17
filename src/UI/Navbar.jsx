import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className=''>
        <nav className='flex justify-between'>
            <Logo />
            <ul className='hidden md:flex justify-center items-center gap-6 pr-24'>
                {/* <NavLink></NavLink> */}
                <li>About</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}
