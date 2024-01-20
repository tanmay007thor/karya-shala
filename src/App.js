import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import HeroSection from "./components/Hero/HeroSection";
// import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      router is working now
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<>{/* <HeroSection/> */}</>}></Route>
          <Route
            path="/sd"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
