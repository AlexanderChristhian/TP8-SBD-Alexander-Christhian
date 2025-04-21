const Os = ({ isDarkMode }) => {
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
                  src="/OSLogo.svg" // Replace with your image source
                  alt="OS"
                  className="max-w-xs rounded-lg translate-x-11"/>
                </div>
              </div>
              
              {/* Right side with text */}
              <div className="flex justify-center items-center h-full">
                <p className={`text-2xl text-justify leading-relaxed font-poppins ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Praktikum Sistem Operasi dirancang untuk memperkuat pemahaman konsep-konsep dasar sistem operasi melalui pengalaman langsung 
                di lingkungan Linux. Mahasiswa mempelajari manajemen proses, memori, sistem file, dan komunikasi antarproses (IPC), 
                serta praktik penggunaan system call dan penanganan sinyal menggunakan bahasa C. Praktikum ini tidak hanya memperdalam pemahaman teoritis, 
                tetapi juga melatih keterampilan teknis seperti debugging, pengelolaan resource, dan pemrograman sistem 
                tingkat rendah yang sangat dibutuhkan dalam dunia industri teknologi dan pengembangan perangkat lunak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Os;