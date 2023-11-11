// Bootstrap Comp
import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import TourScreen from "./screens/TourScreen";
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
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Router>

            <Navbar height={10} currentPage={currentPage}></Navbar>

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/product/:id" element={<TourScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
      <Wapp/>
    </Router>
  );
}

export default App;
