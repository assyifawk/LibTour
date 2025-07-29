// src/app/components/layouts/ServicesTable.jsx
"use client";

const ServicesTable = ({ data }) => {
  const leftColumn = data.slice(0, Math.ceil(data.length / 2));
  const rightColumn = data.slice(Math.ceil(data.length / 2));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-0 text-left">
        <thead>
          <tr className="h-[73px] text-base font-semibold">
            {/* Left section headers */}
            <th className="w-[60px] px-2 py-4">No</th>
            <th className="w-[400px] px-2 py-4">Layanan Perpustakaan</th>
            <th className="w-[100px]"></th>
            {/* Right section headers */}
            <th className="w-[60px] px-2 py-4">No</th>
            <th className="w-[400px] px-2 py-4">Layanan Perpustakaan</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.max(leftColumn.length, rightColumn.length),
          }).map((_, index) => (
            <tr key={index} className="text-sm">
              {/* Left column data */}
              <td className="px-2 py-4">{leftColumn[index] ? index + 1 : ""}</td>
              <td className="px-2 py-4">{leftColumn[index] || ""}</td>
              <td className="w-[100px]"></td>

              {/* Right column data */}
              <td className="px-2 py-4">
                {rightColumn[index] ? leftColumn.length + index + 1 : ""}
              </td>
              <td className="px-2 py-4">{rightColumn[index] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
