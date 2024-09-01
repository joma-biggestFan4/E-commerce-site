import React from "react"
import {useState} from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CartPage from "./CartPage.js"
import Home from "./pages/home/Home.jsx"
import green from "./Images/greenStuff.png"
import img from "./Images/img.png"
import topHat from "./Images/topHat.png"
import notHighlight from "./Images/non-highlight-cart.png"
import fiveStar from "./Images/Frame 36.png" 
import crossBag from "./Images/crossBag.png"
import image from "./Images/image 37.png"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<CartPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
