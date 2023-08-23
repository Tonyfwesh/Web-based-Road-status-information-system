import React,{useEffect} from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from "./Pages/About"
import Signin from "./Pages/Signin"
import Report from "./Pages/Report"
import RoadStatus from "./Pages/RoadStatus"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Component/Footer';
import Signup from './Pages/Signup';
import AOS from "aos";
import "aos/dist/aos.css";
import {AuthProvider} from "./context/AuthContext"



function App() {

  useEffect(() => {
  AOS.init({duration: 2000})
  },[]);

  return (
    <>
    <Router>
      <AuthProvider>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/RoadStatus" element={<RoadStatus/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      
      </AuthProvider>
    </Router>
    
    </>
  );
}

export default App;
