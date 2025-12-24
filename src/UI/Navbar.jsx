import { useEffect, useRef, useState } from 'react'
import  { NavLink }  from 'react-router'
import Logo from './Logo'
import menu from '../assets/menu_icon.svg'
import cross from '../assets/cross_icon.png'

//https://www.figma.com/design/YiTrqJ3LMiaxQzeRTAUZIw/65--Resturent-Website-templates--Community-?node-id=2065-10514&t=QDpn0QiXn02KKnPg-0

export default function Navbar() {

  const [ isOpen, setIsOpen ] = useState(false)
  const menuRef = useRef(null)

  function handleOpen(){
    setIsOpen((open) => !open )
  }

  useEffect(function(){
    function handleOutsideClick(e) {

      //if (menu is open AND click is outside menu) close menu
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  


  return (
    <header className='border-b-3 border-amber-400'>
        <nav className='flex justify-between'>
                <NavLink to='/'>
                    <Logo /> 
                </NavLink>
                
                <ul className='hidden md:flex  text-gray-900 space-x-8 pr-8 justify-center font-medium items-center'>
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
                  {/* <li className='bg-amber-400 px-8 py-3 rounded text-white ml-4 cursor-pointer hover:bg-amber-300 font-medium'>
                    <NavLink to='contact'>
                      Contact Us
                    </NavLink>
                  </li> */}

                  <NavLink to='contact'>
                     <button className='bg-amber-400 px-8 py-3 rounded text-white ml-4 cursor-pointer hover:bg-amber-300 font-medium'> Contact Us</button>
                  </NavLink>

                </ul>    
        </nav>


          {/* -------- Hamburger Icon -------- */}
         <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden'>
          <img className={`w-7 cursor-pointer md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} src={menu} onClick={handleOpen} alt="" />
        </div>

        {/* -------- Overlay (click to close) -------- */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/5 z-10 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
       
         {/*----------mobile menu----------*/}
            <nav 
            ref={menuRef} 
            className={`fixed top-0 right-0 h-[100dvh] w-1/2 md:hidden z-20 bg-amber-500/60 backdrop-blur transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden'>
                    <img className={`${isOpen ? 'block' : 'hidden'} w-7 cursor-pointer`} src={cross} onClick={handleOpen} alt="Close menu" />
                </div>
                
                {/*----------nav links----------*/}

                  <ul className='flex flex-col text-white items-center gap-2 mt-5 text-lg font-medium'>
                    <li>
                      <NavLink to='/' className='hover:bg-[#f3274c] text-white px-4 py-2 rounded inline-block' onClick={handleOpen}>HOME</NavLink>
                    </li>
                    
                    <li>
                      <NavLink to='about' className='hover:bg-[#f3274c] text-white px-4 py-2 rounded inline-block' onClick={handleOpen}>ABOUT</NavLink>
                    </li>

                    <li>
                      <NavLink to='menu' className='hover:bg-[#f3274c] text-white px-4 py-2 rounded inline-block' onClick={handleOpen}>MENU</NavLink>
                    </li>

                    <li>
                      <NavLink to='services' className='hover:bg-[#f3274c] text-white px-4 py-2 rounded inline-block' onClick={handleOpen}>SERVICES</NavLink>
                    </li>
                    
                    <li>
                      <NavLink to='contact' className='hover:bg-[#f3274c] text-white px-4 py-2 rounded inline-block' onClick={handleOpen}>CONTACT</NavLink>
                    </li>
                  </ul>
            </nav>       
    </header>
  )
}



//className={`${isOpen ? 'fixed w-1/2' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20  overflow-hidden bg-amber-500/85 transition-all duration-500 ease-in-out`}

// `${isOpen ? 'hidden' : 'block'} w-7 cursor-pointer`