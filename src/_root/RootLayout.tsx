import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const RootLayout = () => {
  return (
    <div className="h-screen bg-white flex flex-col ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
