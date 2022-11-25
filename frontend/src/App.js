import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/navbar';
//import Modal from './components/modal';
import Sidebar from './components/sidebar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Shop from './pages/shop/shop';
import Sustainability from './pages/sustainabilty/sustainability';
import Login from './pages/login/login';
import ProductPage from './pages/productPage/productPage';
import Swatches from './pages/swatches/swatches';
import Cart from './pages/cart/cart';
import Footer from './components/footer';
import CreateAccount from './pages/login/createAccount';
import Account from './pages/login/account';
import { useGlobalContext } from './context';

function App() {
  const { loggedIn } = useGlobalContext();
  console.log(loggedIn);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      {/* <Modal/> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sustainabilty' element={<Sustainability />} />
        <Route path='swatches' element={<Swatches />} />
        <Route path='login' element={<Login />} />
        <Route path='create' element={<CreateAccount />} />
        <Route path='account' element={<Account />} />
        <Route path='cart' element={<Cart />} />
        <Route path='account' element={<Account />} />
        <Route path='product/:productId' element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
