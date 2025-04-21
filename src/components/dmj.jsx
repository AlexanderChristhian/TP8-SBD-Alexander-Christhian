const Dmj = ({ isDarkMode }) => {
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
                  src="/DMJLogo.svg" // Replace with your image source
                  alt="DMJ"
                  className="max-w-xs rounded-lg translate-x-11"/>
                </div>
              </div>
              
              {/* Right side with text */}
              <div className="flex justify-center items-center h-full">
                <p className={`text-2xl text-justify leading-relaxed font-poppins ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Praktikum Desain dan Manajemen Jaringan (DMJ) mengajarkan mahasiswa cara merancang, mengelola, dan mengamankan 
                jaringan komputer menggunakan perangkat Cisco. Materi mencakup pengalamatan IP, routing statik dan dinamik, 
                VLAN, Access Control List (ACL), dan Virtual Private Network (VPN). Dengan simulator seperti Cisco Packet Tracer,
                mahasiswa dapat mempraktikkan konfigurasi perangkat dan pengujian topologi jaringan. Praktikum ini membekali 
                mahasiswa dengan keterampilan penting dalam pengelolaan infrastruktur jaringan yang dibutuhkan di dunia industri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dmj;