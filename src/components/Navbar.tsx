import { navbarLinks } from '../constants'
import { Link, useLocation } from 'react-router-dom'
import vector from '../assets/Vector.png'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineFullscreenExit } from 'react-icons/ai'

import { Button } from './ui'
import { useEffect, useState } from 'react'
const Navbar = () => {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

  const handleMobileMenu = () => {
    if (window.innerWidth >= 754) {
      setIsMobile(false)
    } else {
      setIsMobile(!isMobile)
    }
  }

  useEffect(() => {
    const updateIsMobile = () => {
      if (window.innerWidth >= 754) {
        setIsMobile(false)
      }
    }

    // Check the screen width on component mount
    updateIsMobile()

    // Add event listener for window resize
    window.addEventListener('resize', updateIsMobile)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateIsMobile)
    }
  }, [])

  return (
    <nav className="w-full h-[120px] flex justify-between items-center py-10 px-4 sm:px-8 border-b-2 border-green-600">
      <Link to="/" className="text-[#228B22] text-2xl font-Merriweather">
        FarmStead
      </Link>

      <div className=" hidden lg:flex gap-10 items-center ">
        {navbarLinks.map((item) => {
          const isActive = location.pathname === item.route
          return (
            <Link
              key={item.label}
              to={item.route}
              className={`${
                isActive
                  ? 'border-[#228B22]  text-[#228B22]  '
                  : ' text-[#36454F] border-transparent '
              } pb-1 border-b-2 `}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
      {!isMobile && (
        <div className="flex flex-col bg-gray-400 relative top-24 w-full left-10 ">
          {navbarLinks.map((item) => {
            const isActive = location.pathname === item.route
            return (
              <Link
                key={item.label}
                to={item.route}
                className={`${
                  isActive
                    ? 'border-[#228B22]  text-[#228B22]  '
                    : ' text-[#36454F] border-transparent '
                } pb-1 border-b-2 `}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
      <div className=" hidden lg:flex gap-8 items-center ">
        <div className="relative">
          <span className=" absolute right-[-8px] top-[-10px] h-3 w-3 rounded-full bg-red-500"></span>
          <img src={vector} alt="cart" />
        </div>

        <div className="flex  gap-6 items-center ">
          <Button
            href="/signin"
            className="text-[#228B22] border-b-2 border-[#228B22]"
          >
            Sign In
          </Button>
          <Button
            href="/signup"
            className="text-[#228B22] bg-[#228B22] px-6 py-2 rounded-lg"
            spanClassName=" bg-transparent text-white "
          >
            Sign Up
          </Button>
        </div>
      </div>
      {/* <p>Hamburger Menu</p> */}
      <div onClick={handleMobileMenu} className="flex mr-4 lg:hidden">
        {isMobile ? <CiMenuFries size={19} /> : <AiOutlineFullscreenExit />}
      </div>
    </nav>
  )
}

export default Navbar
