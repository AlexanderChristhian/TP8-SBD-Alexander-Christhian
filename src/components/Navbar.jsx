import { Link } from "react-router-dom";
import NetlabBlack from "../assets/NetlabBlack.svg";
import NetlabWhite from "../assets/NetlabWhite.svg";

const Navbar = ({ isDarkMode, toggleMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-gradient-to-b from-[#555555] to-[#262626]' : 'bg-gradient-to-b from-[#828282] to-[#E8E8E8]'} 
    h-24 fixed left-0 right-0 py-2 flex justify-between items-center px-6 shadow-md`}>
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
        <Link to="/os" className="bg-gradient-to-b from-[#B02E67] to-[#F47A48] text-transparent bg-clip-text relative hover:opacity-80 transition">
          <p className="-z-10 absolute text-black/60 translate-y-0.5 blur-[1px]">OS</p>OS</Link>
        <Link to="/dmj" className="bg-gradient-to-b from-[#9C1673] to-[#9CCF5E] text-transparent bg-clip-text relative hover:opacity-80 transition">
          <p className="-z-10 absolute text-black/60 translate-y-0.5 blur-[1px]">DMJ</p>DMJ</Link>
          <Link to="/sbd" className="bg-gradient-to-b from-[#F47A48] to-[#00E5C3] text-transparent bg-clip-text relative hover:opacity-80 transition">
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
  );
};

export default Navbar;
