// Bootstrap Comp
import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import { useEffect, useState } from "react";
import "./App.css"
import Wapp from './components/wapp'
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>

            <Navbar height={10} ></Navbar>

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/tour" element={<TourScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
      <Wapp/>
    </Router>
  );
}

export default App;
