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
import ServicesScreen from "./screens/ServicesScreen"
import CoworkingsScreen from "./screens/services/CoworkingsScreen"; 
import HotelsScreen from "./screens/services/HotelsScreen";
import LocalConsumesScreen from "./screens/services/LocalConsumesScreen";
import RestaurantScreen from "./screens/services/RestaurantsScreen";
import TourScreen from "./screens/services/ToursScreen";
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
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/coworking" element={<CoworkingsScreen />} />
          <Route path="/hotels" element={<HotelsScreen />} />
          <Route path="/local-consume" element={<LocalConsumesScreen /> } />
          <Route path="/restaurants" element={<RestaurantScreen />} />
          <Route path="/tours" element={<TourScreen />} />
        </Routes>

      </main>
      <Footer />
      <Wapp />
    </Router>
  );
}

export default App;
