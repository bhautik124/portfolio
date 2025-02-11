import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SecondImageDetail from "./component/SecondImageDetail.jsx";
import ThirdImageDetail from "./component/ThirdImageDetail.jsx";
import Transition from "./component/Transition.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div className="w-full h-screen bg-[#160000]">
      {/* <CustomCursor /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Transition Page={About} />} />
          <Route
            path="/work"
            element={<Transition Page={SecondImageDetail} />}
          />
          <Route
            path="/contact"
            element={<Transition Page={ThirdImageDetail} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
