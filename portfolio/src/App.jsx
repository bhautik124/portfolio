import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Transition from "./component/page transition/Transition.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Worksection from "./component/Worksection.jsx";
import Contact from "./component/Contact.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div className="w-full h-screen bg-[#160000]">
      {/* <CustomCursor /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Transition Page={Home} />} />
          <Route path="/about" element={<Transition Page={About} />} />
          <Route path="/work" element={<Transition Page={Worksection} />} />
          <Route path="/contact" element={<Transition Page={Contact} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
