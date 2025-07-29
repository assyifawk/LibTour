"use client";
import React from "react";

const VirtualTourViewer = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
            Virtual Tour Perpustakaan UPN "Veteran" Yogyakarta
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Opsi Virtual Tour:</h3>

              <button
                onClick={() => window.open('https://www.google.com/maps/@-7.7617723,110.4098061,3a,75y,90t/data=!3m6!1e1!3m4!1sAF1QipPxqKvqKJdLU7CQI0Y2LGJ4v4z6eAJrJcJY4XkO!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPxqKvqKJdLU7CQI0Y2LGJ4v4z6eAJrJcJY4XkO%3Dw203-h100-k-no-pi-0-ya56.51515-ro-0-fo100!7i8704!8i4352', '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <span>Buka Google Street View</span>
              </button>

              <button
                onClick={() => window.open('/peta', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Lihat Peta Interaktif</span>
              </button>

              <button
                onClick={() => window.open('/denah', '_blank')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                </svg>
                <span>Lihat Denah Gedung</span>
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Pratinjau Perpustakaan:</h3>
              <div className="relative">
                <img
                  src="/images/gedung-perpus.png"
                  alt="Gedung Perpustakaan UPN Veteran Yogyakarta"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Informasi Lokasi:</h4>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Alamat:</strong> Jl. Ring Road Utara, Condongcatur, Sleman, DIY
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Koordinat:</strong> -7.7617723, 110.4098061
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Jam Operasional:</strong> Senin-Rabu: 07.30-20.00, Kamis-Jumat: 08.00-16.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTourViewer;
