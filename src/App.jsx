import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Error from "./Pages/Error";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="menu" element={<Menu />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="services" element={<Services />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
