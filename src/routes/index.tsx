import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import DashboardAdmin from '../pages/Dashboard/DashboardAdmin'
import HomePage from '../pages/Home/HomePage'
import Login from '../pages/Login/login'
import ProductPage from '../pages/ProductPage'
import Register from '../pages/RegisterPage/register'
import SearchProdutcts from '../pages/SearchProducts/SearchProdutcts'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<SearchProdutcts />} />
      <Route path='/dashboard' element={<DashboardAdmin />} />
    </Routes>
  )
}
