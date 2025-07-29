"use client";

import React from "react";
import Image from "next/image";

const LogoSection = () => {
  const features = [
    {
      title: "Warna",
      img: "/images/fitur-warna.png",
      desc: (
        <>
          Warna-warna tersebut diadaptasi dari jiwa bela negara UPNVY serta identitas 
          Teknik Geomatika.Semua warna tersebut memiliki keselarasan dan hubungan satu 
          sama lain yang dimana virtual tour ini memanfaatkan salah satu fokus studi di 
          Teknik Geomatika dengan menggunakan SIG untuk pembuatan virtual tour Perpustakaan yang ada pada UPNVY.
        </>
      ),
    },
    {
      title: "LIBTOUR",
      img: "/images/fitur-lib.jpg",
      desc: (
        <>
          Kata <strong>LIBTOUR</strong> merupakan singkatan dari <em>Library Tour</em>,
          yang mengartikan layanan tur digital berbasis web dengan teknologi
          Sistem Informasi Geografis (SIG). Ini dirancang untuk memberikan pengalaman
          interaktif dan memudahkan akses ke perpustakaan melalui eksplorasi virtual.
        </>
      ),
    },
    {
      title: "Ikon Penanda Lokasi",
      img: "/images/fitur-pin.jpg",
      desc: (
        <>
          Ikon <strong>penanda lokasi (map pin)</strong> menunjukkan keterkaitan
          langsung aplikasi dengan lokasi fisik, serta mendukung posisi spasial
          melalui integrasi SIG.
        </>
      ),
    },
    {
      title: "Gedung Perpustakaan",
      img: "/images/fitur-gedung.jpg",
      desc: (
        <>
          Visual <strong>Gedung Perpustakaan</strong> menggambarkan representasi nyata dari fasilitas fisik.
          Ini menunjukkan bahwa layanan virtual berada pada Gedung Perpustakaan UPNVY.
        </>
      ),
    },
    {
      title: "Buku Terbuka",
      img: "/images/fitur-buku.jpg",
      desc: (
        <>
          Ikon <strong>buku terbuka</strong> merepresentasikan akses pengetahuan tanpa batas.
          Hal ini menggambarkan bahwa buku memiliki keterkaitan dengan lokasi Virtual Tour.
        </>
      ),
    },
    {
      title: "Bingkai 360°",
      img: "/images/fitur-360.jpg",
      desc: (
        <>
          Garis kotak atau bingkai di sekitar logo menyimbolkan fitur{" "}
          <strong>virtual tour panorama 360°</strong>, menciptakan pengalaman 
          seolah-olah pengguna benar-benar berada di dalam perpustakaan.
        </>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 space-y-12">
      {/* Logo utama */}
      <div className="flex justify-center">
        <div className="border-4 border-yellow-500 rounded-2xl p-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-tr from-[#d9dbb4] to-[#7a8450]">
          <Image
            src="/images/Logo-LibTour.png"
            alt="Logo LibTour"
            width={240}
            height={240}
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-yellow-700"></h2>

      {/* Semua fitur */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-2 border-yellow-300 rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300 hover:border-yellow-500 hover:bg-yellow-50"
          >
            <div className="flex items-center mb-3 gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-500 shadow-md transform transition duration-300 hover:scale-110 hover:shadow-lg">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-700">{`${index + 1}. ${feature.title}`}</h3>
            </div>
            <p className="text-justify text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Kutipan motivasi */}
      <div className="mt-12 bg-gradient-to-r from-[#7a8450] to-[#d9dbb4] p-6 rounded-xl shadow-inner text-center">
        <p className="italic text-lg text-white">
          "A library is not a luxury but one of the necessities of life."
        </p>
        <p className="mt-2 text-sm text-white font-semibold">– Henry Ward Beecher</p>
      </div>
    </div>
  );
};

export default LogoSection;
