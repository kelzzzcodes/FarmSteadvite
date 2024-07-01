import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default AppRouter
