// Bootstrap Comp
import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import TourScreen from "./screens/TourScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/product/:id" element={<TourScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
