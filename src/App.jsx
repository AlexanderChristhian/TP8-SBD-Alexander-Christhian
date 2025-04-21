import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Dmj from "./components/dmj";
import Os from "./components/os";
import Sbd from "./components/sbd";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "bg-zinc-800" : "bg-gray-400"} min-h-screen`}>
      <div className="flex justify-center">
        <div className="w-full">
          <BrowserRouter>
            <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route path="/home" element={<HomePage isDarkMode={isDarkMode} />} />
              <Route path="/sbd" element={<Sbd isDarkMode={isDarkMode}/>} />
              <Route path="/dmj" element={<Dmj isDarkMode={isDarkMode}/>} />
              <Route path="/os" element={<Os isDarkMode={isDarkMode}/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;