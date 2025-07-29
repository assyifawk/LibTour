// src/app/components/layouts/Footer.js
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative py-6 px-4 bg-gradient-to-r from-[#626f47] to-[#fefae0] text-[15px] font-['Lora']">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">

        {/* Baris bawah: Logo kiri dan kontak kanan */}
        <div className="flex justify-between items-center w-full mt-2 flex-wrap gap-y-4">

          {/* Kiri: Logo dan nama */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/upn-logo.png"
              alt="Logo UPN"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="text-[#fefae0] text-base leading-snug font-bold">
              <p>TEKNIK GEOMATIKA</p>
              <p>UPN “VETERAN” YOGYAKARTA</p>
            </div>
          </div>

          {/* Kanan: Kontak */}
          <div className="flex flex-col items-end gap-2 text-[#626f47] text-base">
            <div className="flex items-center gap-2">
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#626f47]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.604c0-1.337-.026-3.058-1.865-3.058-1.867 0-2.154 1.459-2.154 2.964v5.698h-3v-10h2.879v1.367h.041c.401-.762 1.379-1.566 2.838-1.566 3.035 0 3.595 2 3.595 4.59v5.609z" />
              </svg>
              <a
                href="https://www.linkedin.com/in/assyifa-wirdya-kuswoyo-579602325"
                className="underline hover:text-[#333] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                ASSYIFA WIRDYA KUSWOYO
              </a>
            </div>
            <div className="flex items-center gap-2">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#626f47]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m0 0l4-4m-4 4l4 4m12-10.5v13a2.5 2.5 0 01-2.5 2.5h-17A2.5 2.5 0 010 18.5v-13A2.5 2.5 0 012.5 3h17A2.5 2.5 0 0122 5.5z"
                />
              </svg>
              <a
                href="mailto:117210009@student.upnyk.ac.id"
                className="underline hover:text-[#333] transition"
              >
                117210009@student.upnyk.ac.id
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm pt-3 border-t border-[#626f47] text-[#626f47]  font-bold mt-2">
          © 2025 <span className="font-bold">@117210009_Assyifa Wirdya K</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
