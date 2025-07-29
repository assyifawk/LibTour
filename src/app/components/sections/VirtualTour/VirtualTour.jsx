'use client';
import React from 'react';
import Link from 'next/link';

const VirtualTour = () => {
  return (
    <div className="virtual-tour-wrapper">
      <div className="overlay-frame">
        <div className="content-container">
          <h1 className="highlight-title">
            Virtual Tour Perpustakaan UPN "Veteran" Yogyakarta
          </h1>

          <div className="description-box">
            <p>
              Virtual tour ini memberikan pengalaman menjelajah perpustakaan secara interaktif dan menyeluruh tanpa harus hadir langsung di lokasi. 
              Tujuannya adalah untuk memperkenalkan fasilitas, mempermudah akses informasi, serta mendukung edukasi literasi digital civitas akademika UPNYK.
            </p>
          </div>

          <div className="info-container">
            <div className="info-box">
              <h2 className="highlight-subtitle">📌 Informasi Penggunaan</h2>
              <div className="info-content">
                <h3 className="highlight-subtitle">Pengguna Laptop / PC</h3>
                <div className="info-list">
                  <p>1. 🖱️ Klik kiri dan geser untuk memutar kamera ke kanan/kiri.</p>
                  <p>2. 🖱️ Klik kiri dan geser ke atas/bawah untuk melihat sudut lainnya.</p>
                  <p>3. 🖱️ Gunakan scroll (tombol tengah mouse) untuk zoom in/out.</p>
                  <p>4. ➡️ Klik ikon panah untuk pindah lokasi secara cepat.</p>
                  <p>5. ℹ️ Klik ikon informasi untuk detail setiap area.</p>
                  <p>6. ⌨️ Tekan tombol ← → untuk memutar kamera (keyboard).</p>
                  <p>7. ⌨️ Tekan tombol ↑ ↓ untuk berpindah tempat (keyboard).</p>
                  <p>8. 🔍 Klik ikon kaca pembesar untuk menampilkan peta penuh.</p>
                </div>
              </div>
            </div>

            <div className="location-info-box">
              <h2 className="highlight-subtitle">📍 Informasi Lokasi</h2>
              <div className="location-details">
                <div className="location-item">
                  <span className="location-label">Alamat:</span>
                  <span className="location-value">Jl. Ring Road Utara, Condongcatur, Sleman, DIY</span>
                </div>
                <div className="location-item">
                  <span className="location-label">Koordinat:</span>
                  <span className="location-value">-7.7617723, 110.4098061</span>
                </div>
                <div className="location-item">
                  <span className="location-label">Jam Operasional:</span>
                  <span className="location-value">Senin-Rabu: 07.30-20.00, Kamis-Jumat: 08.00-16.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="button-wrapper">
            <button
              className="tour-button"
              onClick={() => {
                // Buka langsung ke panorama 360° virtual tour
                window.open('/virtual-tour/index.htm', '_blank');
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .virtual-tour-wrapper {
          background-color: #fff;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
        }

        .overlay-frame {
          position: relative;
          background-color: transparent;
          width: 100%;
          max-width: 1200px;
          border-radius: 20px;
          overflow: hidden;
          transition: box-shadow 0.4s ease;
          box-shadow: 0 0 0 transparent;
          border: 2px solid #1b5e20;
        }

        .overlay-frame:hover {
          box-shadow: 0 0 30px 4px rgba(242, 183, 5, 0.4),
                      0 0 40px 6px rgba(0, 128, 0, 0.3);
        }

        .overlay-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/images/gedung-perpus.png');
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          z-index: 0;
        }

        .content-container {
          position: relative;
          z-index: 1;
          padding: 2rem;
        }

        .highlight-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: #1b5e20;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
        }

        .description-box {
          padding: 1rem 1.5rem;
          border: 2px solid #1b5e20;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
        }

        .description-box p {
          text-align: justify;
          font-size: 1rem;
          color: #111;
          margin: 0;
          line-height: 1.6;
        }

        .info-container {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .info-box {
          flex: 1;
          padding: 1.5rem;
          border: 2px solid #1b5e20;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.85);
        }

        .location-info-box {
          flex: 1;
          padding: 1.5rem;
          border: 2px solid #1b5e20;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.85);
        }

        .info-content {
          height: 100%;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .info-list p {
          margin: 0;
          font-size: 0.9rem;
          color: #222;
          line-height: 1.4;
          padding: 0.2rem 0;
        }

        .highlight-subtitle {
          text-align: center;
          margin-bottom: 1rem;
          color: #1b5e20;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .info-content h3 {
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: #1b5e20;
          text-align: center;
        }

        .location-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .location-item {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .location-label {
          font-weight: 600;
          color: #1b5e20;
          min-width: 140px;
        }

        .location-value {
          color: #222;
          flex: 1;
        }

        .button-wrapper {
          display: flex;
          justify-content: center;
        }

        .tour-button {
          background-color: #626f47;
          color: #000;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .tour-button:hover {
          background-color: #d8a000;
        }

        @media (max-width: 768px) {
          .highlight-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .content-container {
            padding: 1.5rem;
          }

          .tour-button {
            width: 100%;
          }

          .info-container {
            flex-direction: column;
            gap: 1rem;
          }

          .info-list p {
            font-size: 0.85rem;
          }

          .location-item {
            flex-direction: column;
            gap: 0.2rem;
          }

          .location-label {
            min-width: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default VirtualTour;
