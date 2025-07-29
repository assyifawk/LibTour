import React from "react";
import Profile from "../../fragments/Profile";

const WriterProfile = () => {
  const profile = [
    { key: "Nama", value: "Assyifa Wirdya Kuswoyo" },
    { key: "NIM", value: "117210009" },
    { key: "Fakultas", value: "Teknologi Mineral dan Energi" },
    { key: "Prodi", value: "Teknik Geomatika" },
  ];

  return (
    <div className="relative px-10 md:px-[70px] py-20 bg-gradient-to-bl from-white via-slate-100 to-slate-200 overflow-hidden">
      <div className="absolute bottom-4 right-4 opacity-40">
        <img src="/images/lamp-grafity.png" alt="lamp" className="w-[180px]" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* FOTO PENULIS */}
        <div className="p-4 mx-auto">
          <div className="group w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl bg-white mx-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105 hover:scale-105">
            <img
              src="/images/profil-syifa1.jpg"
              className="w-full h-full object-cover object-top"
              alt="Foto Penulis - Assyifa Wirdya Kuswoyo"
            />
          </div>
        </div>

        {/* KETERANGAN PROFIL PENULIS */}
        <div className="relative flex flex-col md:pl-14 -mt-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-gradient-to-r from-[#7a8450] to-[#d9dbb4] px-6 py-2 rounded-full shadow-md text-white font-bold text-xl tracking-wide flex items-center gap-2">
              <span className="text-2xl">👩🏻‍💻</span>
              PROFIL MAHASISWA
            </div>
          </div>

          <div className="bg-white border-2 border-yellow-300 rounded-xl p-4 text-justify text-base text-gray-700 leading-relaxed hover:border-yellow-500 hover:bg-yellow-50 transition duration-300">
            Penulis merupakan mahasiswi Teknik Geomatika yang memiliki keterampilan pada fokus studi 
            Sistem Informasi Geografis (SIG) dan dapengembangan digital. 
          </div>

          <Profile profile={profile} classname="mt-6" />

          <div className="mt-6">
            <p className="font-semibold text-md mb-2">Profil Akademik / Kontak:</p>
            <div className="w-[120px] border-2 border-yellow-400 rounded-lg p-2 bg-white hover:shadow-xl transition">
              <img
                src="/images/qr/qr-linkedin-writer.png"
                alt="QR Code LinkedIn"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;
