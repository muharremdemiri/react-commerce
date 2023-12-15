import './App.css';
import Navbar from "./components/Navbar";
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import ProductList from "./Pages/ProductList";
import LoginPage from "./Pages/LoginPage";
import Footer from "./components/Footer/Footer";
import ProductCreate from "./Pages/ProductCreate";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <Router>
        <Navbar toggle={toggle}/>
        <Routes>
            <Route path='/' element={<Home/>} className='main' exact />
            <Route path='/login' element={<LoginPage/>} className='main' exact />
            <Route path='/search/:category' element={<ProductList/>} className='main' exact />
            <Route path='/create' element={<ProductCreate/>} className='main' exact />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
