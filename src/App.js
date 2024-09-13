import "./App.css";
import Header from "./components/common/header/Header.jsx";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./components/about/About.jsx";
import CourseHome from "./components/allcourses/CourseHome.jsx";
import Team from "./components/team/Team.jsx"
import Pricing from "./components/pricing/Pricing.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import Home from './components/home/Home..jsx';
import { Outlet } from 'react-router-dom'




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/courses" element={<CourseHome />} />
          <Route  path="/team" element={<Team />} />
          <Route  path="/pricing" element={<Pricing />} />
          <Route  path="/journal" element={<Blog />} />
          <Route  path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Outlet />
      </BrowserRouter>
    </>
  );
}

export default App;
