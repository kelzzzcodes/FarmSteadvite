import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import Shop from './_root/pages/Shop'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
