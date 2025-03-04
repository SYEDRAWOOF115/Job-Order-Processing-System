import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import OrderProcessing from "./pages/OrderProcessing";
import Footer from "./components/Footer";
const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/orders' element={<OrderProcessing />} />

      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
