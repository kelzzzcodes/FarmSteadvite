import { navbarLinks } from '../constants'
import { Link, useLocation } from 'react-router-dom'
import vector from '../assets/Vector.png'
import Button from './ui/Button'
const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="w-full h-[120px] flex justify-between items-center py-10 px-4 sm:px-8 lg:px-16 border-b-2 border-green-600">
      <Link to="/" className="text-[#228B22] text-2xl">
        FarmStead
      </Link>

      <div className=" hidden lg:flex   gap-10 items-center ">
        {navbarLinks.map((item) => {
          const isActive = location.pathname === item.route
          return (
            <Link
              key={item.label}
              to={item.route}
              className={`${
                isActive
                  ? 'border-black border-b-2 text-[#228B22]  '
                  : ' text-[#36454F] '
              } pb-1`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
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
            spanClassName="text-white "
          >
            Sign Up
          </Button>
        </div>
      </div>
      <p>Hamburger Menu</p>
    </nav>
  )
}

export default Navbar
