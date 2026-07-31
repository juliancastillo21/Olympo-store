import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import Home from '../pages/Home/Home.jsx'
import Catalog from '../pages/Catalog/Catalog.jsx'
import Product from '../pages/Product/Product.jsx'
import About from '../pages/About/About.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Cart from '../pages/Cart/Cart.jsx'
import Dashbard from '../pages/Dashbard/Dashbard.jsx'
import Login from '../pages/Login/Login.jsx'
import Settings from '../pages/Settings/Settings.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="dashboard" element={<Dashbard />} />
        <Route path="login" element={<Login />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
