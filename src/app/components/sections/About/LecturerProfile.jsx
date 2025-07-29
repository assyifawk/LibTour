"use client";
import React from "react";
import Profile from "../../fragments/Profile";

const LectureProfile = () => {
  const profile = [
    { key: "Nama", value: "Dwi Wahyuningrum, S.T., M.Eng." },
    {
      key: "Bidang Keahlian",
      value: "Sistem Informasi Geografi, Kartografi, Geoinformatika",
    },
  ];

  return (
    <div className="relative px-10 md:px-[70px] py-20 bg-gradient-to-bl from-white via-slate-100 to-slate-200 overflow-hidden">
      <div className="absolute bottom-0 right-4 opacity-40">
        <img src="/images/lamp-grafity.png" alt="lamp" className="w-[180px]" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* KETERANGAN PROFIL DOSEN */}
        <div className="relative flex flex-col md:pr-14 -mt-6 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-gradient-to-r from-[#7a8450] to-[#d9dbb4] px-6 py-2 rounded-full shadow-md text-white font-bold text-xl tracking-wide flex items-center gap-2">
              <span className="text-2xl">👩🏻‍🏫</span>
              PROFIL DOSEN
            </div>
          </div>

          <div className="bg-white border-2 border-yellow-300 rounded-xl p-4 text-justify text-base text-gray-700 leading-relaxed hover:border-yellow-500 hover:bg-yellow-50 transition duration-300">
            Beliau merupakan Akademisi Teknik Geomatika sekaligus Dosen Pembimbing penulis
            yang berpengalaman dengan keahliannya di bidang Sistem Informasi Geografis.
          </div>

          <Profile profile={profile} classname="mt-6" />

          <div className="mt-6">
            <p className="font-semibold text-md mb-2">Profil Akademik / Kontak:</p>
            <div className="w-[120px] border-2 border-yellow-400 rounded-lg p-2 bg-white hover:shadow-xl transition">
              <img
                src="/images/qr/qr-linkedin-lecture.png"
                alt="QR Code Akademik"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* FOTO DOSEN */}
        <div className="p-4 mx-auto order-1 md:order-2">
          <div className="group w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl bg-white mx-auto transition-transform duration-700 ease-in-out transform group-hover:scale-105 hover:scale-105">
            <img
              src="/images/profile-dosen-pembimbing.jpg"
              className="w-full h-full object-cover object-top"
              alt="Foto Dosen Pembimbing - Dwi Wahyuningrum"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureProfile;
