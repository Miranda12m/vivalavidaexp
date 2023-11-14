// Bootstrap Comp
import React from "react";
import { Container } from "react-bootstrap";
import { Route, HashRouter as Router, Routes, Navigate } from "react-router-dom";
//
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
//
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import TourScreen from "./screens/TourScreen"
//
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css"
import Wapp from './components/wapp'
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar height={10}  data-aos-easing='ease' data-aos-duration='400' data-aos-delay='0'></Navbar>
      <main style={{backgroundColor:'#edecea'}}>
        {/*Esta*/}
        <Routes>
        <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
            <Route path="/services" element={<TourScreen />} />
        </Routes>

      </main>
      <Footer />
      <Wapp />
    </Router>
  );
}

export default App;
