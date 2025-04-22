import { useState, useEffect } from 'react';
import '../styles/neonEffect.css'; 

const Sbd = ({ isDarkMode }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = `Praktikum Sistem Basis Data (SBD) memberikan pemahaman menyeluruh tentang cara merancang, mengelola, dan 
mengakses database secara efisien. Mahasiswa mempelajari konsep dasar basis data relasional, bahasa SQL 
untuk manipulasi data, serta penerapan database dalam pengembangan aplikasi. Selain itu, praktikum ini juga 
mencakup integrasi antara backend dan frontend, sehingga mahasiswa dapat memahami bagaimana data diolah di sisi server 
dan ditampilkan ke pengguna melalui antarmuka yang interaktif. 
Praktikum SBD membekali mahasiswa dengan keterampilan teknis yang penting dalam pengembangan sistem informasi modern.`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40); // Adjust typing speed here (lower = faster)
      
      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, fullText]);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gradient-to-b from-[#2C2C2C] to-[#555555]" : "bg-gradient-to-b from-[#CCCCCC] to-[#666666]"} 
    transition-colors duration-300 mt-24`}>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 mt-4 translate-y-20">
        <div className={`rounded-3xl overflow-hidden shadow-xl ${isDarkMode ? "bg-[#323232]" : "bg-[#D9D9D9]"}`}>
          <div className={`p-8 mx-auto h-max`}>
            <div className="flex flex-col md:flex-row items-center gap-28">
              {/* Left side with image */}
              <div className="relative">
                <div className="relative">
                  <img
                  src="/SBDLogo.svg" // Replace with your image source
                  alt="SBD"
                  className="max-w-xs rounded-lg translate-x-11 neon-glow neon-cyan pop-animation"/>
                </div>
              </div>
              
              {/* Right side with text */}
              <div className="flex justify-center items-center h-full">
                <p className={`text-2xl text-justify leading-relaxed font-poppins font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  {displayedText}
                  <span className="inline-block w-1 h-6 ml-1 bg-current animate-blink"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sbd;