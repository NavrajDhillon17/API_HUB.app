import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Weather from "./Pages/Weather";
import Recipe from "./Pages/Recipe";
import Crypto from "./Pages/Crypto";
import Cosmos from "./Pages/Cosmos";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/crypto" element={<Crypto/>}/>
        <Route path="/cosmos" element={<Cosmos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
