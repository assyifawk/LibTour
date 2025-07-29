"use client";
import React from "react";

const ServiceTable = ({ data }) => {
  const leftColumn = data.slice(0, 4);
  const rightColumn = data.slice(4);

  return (
    <div className="service-table-wrapper">
      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-lg p-6">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="h-[73px] text-base font-semibold bg-gray-50">
              {/* Left section headers */}
              <th className="w-[120px] px-2 py-4 border border-gray-300">No</th>
              <th className="w-[268px] px-2 py-4 border border-gray-300">Nama Layanan</th>
              <th className="w-[300px] px-2 py-4 mr-[106px] border border-gray-300">Deskripsi Layanan</th>
              <th className="w-[50px] border border-gray-300"></th>
              {/* Right section headers */}
              <th className="w-[120px] px-2 py-4 border border-gray-300">No</th>
              <th className="w-[268px] px-2 py-4 border border-gray-300">Nama Layanan</th>
              <th className="w-[300px] px-2 py-4 border border-gray-300">Deskripsi Layanan</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
              length: Math.max(leftColumn.length, rightColumn.length),
            }).map((_, index) => (
              <tr key={index} className="text-sm border-b border-gray-300 hover:bg-gray-50">
                {/* Left column data */}
                <td className="px-2 py-4 align-top border border-gray-300">{leftColumn[index]?.no || ""}</td>
                <td className="px-2 py-4 align-top font-medium border border-gray-300">{leftColumn[index]?.name || ""}</td>
                <td className="px-2 py-4 align-top text-justify leading-relaxed border border-gray-300">{leftColumn[index]?.description || ""}</td>
                <td className="w-[50px] border border-gray-300"></td>

                {/* Right column data */}
                <td className="px-2 py-4 align-top border border-gray-300">{rightColumn[index]?.no || ""}</td>
                <td className="px-2 py-4 align-top font-medium border border-gray-300">{rightColumn[index]?.name || ""}</td>
                <td className="px-2 py-4 align-top text-justify leading-relaxed border border-gray-300">{rightColumn[index]?.description || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .service-table-wrapper {
          min-height: 100vh;
          padding: 40px 20px;
          position: relative;
          width: 100%;
          background: transparent;
        }

        .service-table-wrapper > div {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: none;
          margin: 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .service-table-wrapper > div::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%);
          pointer-events: none;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default ServiceTable;
