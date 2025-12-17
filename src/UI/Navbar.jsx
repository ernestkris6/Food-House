import Logo from './Logo'
import  { Link, NavLink }  from 'react-router'


export default function Navbar() {
  return (
    <header className='border-b-3 border-amber-400'>
        <nav className='flex justify-between'>
                <Link to='/'>
                    <Logo /> 
                </Link>
                
                <ul className='hidden md:flex space-x-8 pr-24 justify-center font-medium items-center'>
                  <li>
                    <NavLink to='about'>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='menu'>
                      Menu
                    </NavLink>
                  </li>
                   <li>
                    <NavLink to='services'>
                      Services
                    </NavLink>
                  </li>
                  <li className='bg-amber-400 px-8 py-3 rounded text-white ml-6 cursor-pointer hover:bg-amber-500 font-medium'>
                    <NavLink to='contact'>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
        </nav>
    </header>
  )
}
