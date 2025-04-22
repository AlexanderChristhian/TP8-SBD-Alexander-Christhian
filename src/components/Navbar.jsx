import { Link } from "react-router-dom";
import NetlabBlack from "../assets/NetlabBlack.svg";
import NetlabWhite from "../assets/NetlabWhite.svg";
import '../styles/neonEffect.css'; // Import the neon effect styles

const Navbar = ({ isDarkMode, toggleMode }) => {
  return (
    <div className="navbar-container relative">
      <div className={`${isDarkMode ? 'bg-gradient-to-b from-[#555555] to-[#262626]' : 'bg-gradient-to-b from-[#828282] to-[#E8E8E8]'} 
      h-24 fixed left-0 right-0 py-2 flex justify-between items-center px-6 shadow-md z-50`}>
        {/* Left: Netlab Logo */}
        
        <div className="flex items-center hover:opacity-80">
        <Link to="/home" className="flex items-center">
          {isDarkMode ? (
            <img src={NetlabWhite} alt="Netlab Logo" className="h-20 " />
          ) : (
            <img src={NetlabBlack} alt="Netlab Logo" className="h-20 " />
          )}
          </Link>
        </div>
        
        
        {/* Center: OS DMJ SBD text with gradient colors */}
        <div className="flex gap-8 text-5xl font-bold">
          <Link to="/os" className="nav-item os-gradient text-transparent bg-clip-text relative transition">
            <p className="-z-10 absolute text-black/60 translate-y-0.5 blur-[1px]">OS</p>OS</Link>
          <Link to="/dmj" className="nav-item dmj-gradient text-transparent bg-clip-text relative transition">
            <p className="-z-10 absolute text-black/60 translate-y-0.5 blur-[1px]">DMJ</p>DMJ</Link>
          <Link to="/sbd" className="nav-item sbd-gradient text-transparent bg-clip-text relative transition">
            <p className="-z-10 absolute text-black/60 translate-y-0.5 blur-[1px]">SBD</p>SBD</Link>
        </div>
        
        {/* Right: Toggle button */}
        <div className="flex items-center">
          <button 
            onClick={toggleMode}
            className={`w-16 h-8 rounded-full ${isDarkMode ? 'bg-[#E8E8E8]' : 'bg-[#666666]'} 
            flex items-center transition-colors duration-300 focus:outline-none shadow relative p-0.5`}
          >
            <div
              className={`${isDarkMode ? 'bg-[#666666] right-0.5' : 'bg-[#E8E8E8] left-0.5'} 
              w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 absolute }`}
            />
          </button>
        </div>
      </div>
      
      {/* Neon line at the bottom */}
      <div className={`fixed left-0 right-0 h-1 z-50 neon-line ${isDarkMode ? 'neon-line-dark' : 'neon-line-light'}`}></div>
    </div>
  );
};

export default Navbar;
