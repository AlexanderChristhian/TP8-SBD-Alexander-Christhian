import ST from "../assets/ST.png"; // Make sure this path is correct

const HomePage = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gradient-to-b from-[#2C2C2C] to-[#555555]" : "bg-gradient-to-b from-[#CCCCCC] to-[#666666]"} 
    transition-colors duration-300 mt-24`}>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 mt-4">
        <div className={`rounded-3xl overflow-hidden shadow-xl ${isDarkMode ? "bg-[#323232]" : "bg-[#D9D9D9]"}`}>
          <div className={`p-8 mx-auto`}>
            <div className="flex flex-col md:flex-row items-center gap-28">
              {/* Left side with image */}
              <div className="relative">
                <div className="relative">
                  <img
                  src="chat-bubble.svg" // Replace with your image source
                  alt="ST"
                  className="max-w-xs rounded-lg translate-y-36 translate-x-52"/>
                  <img 
                    src={ST} 
                    alt="ST" 
                    className="max-w-xs rounded-lg"
                  />
                </div>
              </div>
              
              {/* Right side with text */}
              <div className="flex justify-center items-center h-full">
                <p className={`text-2xl text-justify leading-relaxed font-poppins ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  Netlab adalah salah satu laboratorium di Universitas Indonesia
                  yang berada di bawah naungan Departemen Teknik Elektro,
                  Fakultas Teknik. Laboratorium ini memiliki peran penting dalam
                  mendukung proses pembelajaran dan pengembangan
                  keilmuan di bidang teknologi informasi dan jaringan. Netlab
                  secara khusus mengelola dan mengajarkan tiga mata kuliah
                  utama, yaitu Sistem Basis Data (SBD), Sistem Operasi (OS), serta
                  Desain dan Manajemen Jaringan (DMJ), yang menjadi fondasi
                  penting bagi mahasiswa untuk memahami konsep-konsep
                  dasar dan lanjutan dalam sistem komputer dan jaringan
                  modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
