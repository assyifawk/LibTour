"use client";
import React from "react";
import SubTitle from "../../elements/SubTitle";
import ServiceTable from "../../layouts/ServiceTable";
import servicesData from "../../../utils/services.json";

const Leader = () => {
  const { services, institution, system, hours } = servicesData;

  return (
    <div className="px-[70px] py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <SubTitle
            title={[
              { text: "Layanan" },
              {
                text: "Perpustakaan",
                color: "text-primary",
                underline: true,
              },
            ]}
          />
          <p className="text-gray-600 mt-4 text-lg">
            {institution}
          </p>
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <p className="text-blue-800 font-medium mb-2">Sistem Layanan: {system}</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <p><strong>Senin - Rabu:</strong> {hours.senin_rabu}</p>
                <p><strong>Kamis - Jumat:</strong> {hours.kamis_jumat}</p>
              </div>
              <div>
                <p><strong>Istirahat (Senin-Kamis):</strong> {hours.istirahat_senin_kamis}</p>
                <p><strong>Istirahat (Jumat):</strong> {hours.istirahat_jumat}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ServiceTable data={services} />
        </div>
      </div>
    </div>
  );
};

export default Leader;