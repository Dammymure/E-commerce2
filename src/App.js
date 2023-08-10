import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import "./components/style.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import RegisterSeller from "./pages/RegisterSeller";
import Login from "./pages/Login";
import LoginSeller from "./pages/LoginSeller";
import SellerDashboard from "./pages/SellerDashboard";
import AddProduct from "./pages/AddProduct";
import ViewSingleProduct from "./pages/ViewSingleProduct";
import EditProduct from "./pages/EditProduct";
import SellerProfile from "./pages/SellerProfile";
import EditSeller from "./pages/EditSeller";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import EditUserProfile from "./pages/EditUserProfile";
import UserViewSingleProduct from "./pages/UserViewSingleProduct";
import Cart from "./pages/Cart";
import NavbarUser from './components/NavbarUser';


function App() {
  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
    // setCart([...cart, item])
    // cart.push(item)
    // console.log(cart);
  }



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="registeruser" element={<RegisterUser />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="registerseller" element={<RegisterSeller />}></Route>
          <Route path="registerseller" element={<RegisterSeller />}></Route>
          <Route path="loginseller" element={<LoginSeller />}></Route>
          <Route path="sellerdashboard" element=
            {<ProtectedRoute>
              <SellerDashboard />
            </ProtectedRoute>
            }></Route>
          <Route path="addproduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>}></Route>
          <Route path="viewsingleproduct/:id" element={<ProtectedRoute><ViewSingleProduct /></ProtectedRoute>}></Route>
          <Route path="editproduct/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>}></Route>
          <Route path="sellerprofile/:id" element={<ProtectedRoute><SellerProfile /></ProtectedRoute>}></Route>
          <Route path="editseller/:id" element={<ProtectedRoute><EditSeller /></ProtectedRoute>}></Route>

          <Route path="userdashboard" element={<ProtectedRoute><UserDashboard handleClick={handleClick} size={cart.length} /></ProtectedRoute>}></Route>

          <Route path="userprofile/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route>

          <Route path="edituserprofile/:id" element={<ProtectedRoute><EditUserProfile /></ProtectedRoute>}></Route>
          <Route path="userviewsingleproduct/:id" element={<ProtectedRoute><UserViewSingleProduct /></ProtectedRoute>}></Route>
          <Route path="cart" element={<ProtectedRoute><Cart cart={cart} setCart={setCart}
          // handleChange={handleChange}
          /></ProtectedRoute>}></Route>

          <Route path="navbaruser" element={<ProtectedRoute><NavbarUser cart={cart} setCart={setCart} /></ProtectedRoute>}></Route>


        </Routes>

      </BrowserRouter>

    </div>
  )
}


export function ProtectedRoute(props) {
  if (localStorage.getItem("seller") || localStorage.getItem("user")) {
    return props.children
  } else {
    return <Navigate to='/login' />
  }
}

export default App;
