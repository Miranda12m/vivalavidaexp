// Bootstrap Comp
import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
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


      <main>
        
        <Routes>
          <Route path="/home" element={<HomeScreen />} />

        </Routes>

        <Container>
          <Routes>
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
      <Wapp />
    </Router>
  );
}

export default App;
