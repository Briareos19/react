// src/App.js

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import PrivateRoute from "./pages/PrivateRoute"


export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Products" element={<Products />} />
        {/* <Route path="/login" element={<Login />} />
        <PrivateRoute path="/admin" component={Admin} />   */}
   
        {/* <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin" component={Admin} /> */}
      </Routes>
    </div>
  );
}
