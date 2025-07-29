"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Footer from "@/app/components/layouts/Footer";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNzeWlmYTE0IiwiYSI6ImNtYjY4cGV3YzI5cDYyanNiZWc3NDVnYmYifQ.aHsKkoo1mU5c6nv0g69rvQ";

const LocationAndAccess = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directionsRef = useRef(null);
  const [userCoords, setUserCoords] = useState(null);
  const [layer, setLayer] = useState("custom");

  const perpustakaanCoords = [110.40980607822473, -7.761772303272082];

  const baseMaps = {
    streets: "mapbox://styles/mapbox/streets-v12",
    satellite: "mapbox://styles/mapbox/satellite-v9",
    light: "mapbox://styles/mapbox/light-v10",
    custom: "mapbox://styles/mapbox/navigation-day-v1",
  };

  // Data GeoJSON untuk rute perpustakaan
  const ruteData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: 1,
          NAMA: "JALAN",
          KATEGORI: "JLN_MTR_MBL",
          mode: "mobil",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.40932609851691, -7.763889422102967],
              [110.4093581062158, -7.763773664928502],
              [110.40943632502987, -7.763549484419476],
              [110.40946913292125, -7.7634408628743],
              [110.40952274581686, -7.763271984065831],
              [110.4095419504362, -7.7632204482657],
              [110.40966758065431, -7.762828775978152],
              [110.40971439191387, -7.762667825519352],
              [110.40969958835316, -7.762650382608789],
              [110.40889099386027, -7.762396271034133],
              [110.40864613496385, -7.762314606439301],
              [110.40861812822735, -7.762324913622052],
              [110.40847329338992, -7.76290290831159],
              [110.40840687741473, -7.763125701662809],
              [110.40859652303058, -7.763171687464367],
              [110.40860852591763, -7.763204194665885],
              [110.4085357084027, -7.763584766594166],
              [110.40850370070382, -7.763736995268985],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 2,
          NAMA: "JALAN",
          KATEGORI: "JLN_MTR_MBL",
          mode: "mobil",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.40943632502987, -7.763549484419478],
              [110.4100768791036, -7.763721930975503],
              [110.41041295994184, -7.763799631009807],
              [110.41055619439432, -7.763814695300506],
              [110.41060020498027, -7.763802802439466],
              [110.41068102441996, -7.763550673706327],
              [110.41066622085921, -7.763392102098559],
              [110.41063541344904, -7.763342152029723],
              [110.4105886021894, -7.763327484151237],
              [110.41056499651152, -7.763300923397002],
              [110.41056419631906, -7.763262469764759],
              [110.41072903596829, -7.762858111769432],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 3,
          NAMA: "JALAN",
          KATEGORI: "MOTOR_MOBIL",
          mode: "mobil",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.4104983804883, -7.76411399885908],
              [110.41055619439432, -7.763814695300506],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 4,
          NAMA: "JALAN",
          KATEGORI: "JLN_MTR",
          mode: "motor",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.41068102441996, -7.763550673706327],
              [110.41127826807616, -7.763759195279457],
              [110.41136168814134, -7.763353053830963],
              [110.41140129766873, -7.763163362448953],
              [110.41141630127753, -7.763089031946758],
              [110.41100400210635, -7.762909449399216],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 5,
          NAMA: "JALAN",
          KATEGORI: "JLN_MTR",
          mode: "motor",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.41136168814134, -7.763353053830963],
              [110.41147031426934, -7.763308752873233],
              [110.41154833303536, -7.762968616505312],
              [110.411354486409, -7.762872284127316],
              [110.41143910676294, -7.762669807668247],
              [110.41161314862553, -7.76271083814801],
              [110.41169176753593, -7.762367133425671],
              [110.41177218687933, -7.762007967636982],
              [110.41014219481401, -7.761534629473218],
              [110.41009538355442, -7.761645233664732],
              [110.40984572350317, -7.761574173448256],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 6,
          NAMA: "JALAN",
          KATEGORI: "JLN",
          mode: "jalan",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.4100768791036, -7.763721930975503],
              [110.41010498586405, -7.763629860380544],
              [110.41014909647406, -7.76356296300342],
              [110.41021841314695, -7.763413112840018],
              [110.410330490105, -7.763072381912464],
              [110.41044391738791, -7.76276376151453],
              [110.41055149326336, -7.762799217193156],
              [110.41072903596829, -7.762858111769432],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 7,
          NAMA: "JALAN",
          KATEGORI: "JLN",
          mode: "jalan",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.41010498586405, -7.763629860380544],
              [110.40946913292125, -7.7634408628743],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 8,
          NAMA: "JALAN",
          KATEGORI: "JLN",
          mode: "jalan",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.41021841314695, -7.763413112840018],
              [110.4095419504362, -7.7632204482657],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 9,
          NAMA: "JALAN",
          KATEGORI: "JLN",
          mode: "jalan",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.410330490105, -7.763072381912464],
              [110.40966758065431, -7.762828775978152],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 10,
          NAMA: "JALAN",
          KATEGORI: "JLN",
          mode: "jalan",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.41100400210635, -7.762909449399216],
              [110.41121202714282, -7.762375978771305],
              [110.41062688639775, -7.762197585209766],
              [110.41017182694135, -7.762078507465302],
              [110.41016372499254, -7.76209857675044],
              [110.4099449723755, -7.762039260860482],
              [110.40992066652913, -7.762106604464225],
              [110.4097730310181, -7.762546344551898],
              [110.41044391738791, -7.76276376151453],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 12,
          NAMA: "JALAN",
          KATEGORI: "JLN_MTR_MBL",
          mode: "mobil",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.40847329338992, -7.76290290831159],
              [110.40952274581686, -7.763271984065831],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 14,
          NAMA: "JALAN",
          KATEGORI: "JLN_MTR_MBL",
          mode: "mobil",
        },
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [110.40840687741473, -7.763125701662809],
              [110.4081303609032, -7.763061455327094],
              [110.40789607955104, -7.763002585556168],
              [110.40748558081295, -7.762872804441133],
              [110.40741941489794, -7.762803231043375],
              [110.40740861229956, -7.762749044062147],
              [110.40767867725877, -7.761874692670837],
              [110.40762398910456, -7.761402394988299],
              [110.40765707206205, -7.761283985996027],
              [110.40818099808305, -7.760926751885044],
              [110.40844431141826, -7.760993649681734],
              [110.40933214997193, -7.761205046649317],
              [110.40931797156153, -7.761246523257064],
              [110.4091451299876, -7.761805788084484],
              [110.40917753778274, -7.761876699600357],
              [110.40969673766695, -7.7620345780267],
              [110.40984572350317, -7.761574173448253],
            ],
          ],
        },
      },
    ],
  };

  const add3DLayer = () => {
    if (!map.current.getSource("perpus")) {
      map.current.addSource("perpus", {
        type: "geojson",
        data: "/perpus.geojson",
      });
    }

    if (map.current.setLight) {
      map.current.setLight({
        anchor: "viewport",
        color: "#ffffff",
        intensity: 0.4,
      });
    }

    if (!map.current.getLayer("perpus-3d")) {
      map.current.addLayer({
        id: "perpus-3d",
        type: "fill-extrusion",
        source: "perpus",
        paint: {
          "fill-extrusion-color": "#ffaa00",
          "fill-extrusion-height": 25,
          "fill-extrusion-base": 0,
          "fill-extrusion-opacity": 0.85,
        },
      });
    }
  };

  const addRouteLayer = () => {
    if (!map.current.getSource("rute-jalan")) {
      map.current.addSource("rute-jalan", {
        type: "geojson",
        data: ruteData, // Menggunakan data GeoJSON yang sudah didefinisikan
      });
    }

    if (!map.current.getLayer("rute-perjalanan")) {
      map.current.addLayer({
        id: "rute-perjalanan",
        type: "line",
        source: "rute-jalan",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": [
            "match",
            ["get", "mode"],
            "mobil",
            "#e74c3c",
            "motor",
            "#2980b9",
            "jalan",
            "#27ae60",
            "#ccc",
          ],
          "line-width": 5,
        },
      });
    }
  };

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: baseMaps[layer],
      center: perpustakaanCoords,
      zoom: 10,
      pitch: 50,
      bearing: -20,
      antialias: true,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showAccuracyCircle: false,
      showUserHeading: true,
    });

    map.current.addControl(geolocate, "top-left");

    // Marker untuk perpustakaan
    const el = document.createElement("div");
    el.className = "custom-marker";
    el.style.backgroundImage = "url(/library-icon.png)";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "cover";

// === Hilangkan background putih bawaan popup ===
const style = document.createElement("style");
style.innerHTML = `
  .mapboxgl-popup.library-popup .mapboxgl-popup-content {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
  }
`;
document.head.appendChild(style);

// === Container popup awal ===
const popupContainer = document.createElement("div");
popupContainer.style.cursor = "pointer";
popupContainer.style.display = "flex";
popupContainer.style.flexDirection = "column";
popupContainer.style.alignItems = "center";
popupContainer.style.background = "transparent";
popupContainer.style.border = "none";

// === Label nama gedung ===
const popupLabel = document.createElement("div");
popupLabel.innerText = "Perpustakaan Yos Sudarso";
popupLabel.style.background = "#626f47"; 
popupLabel.style.color = "#fefae0";
popupLabel.style.padding = "2px 6px";      // lebih kecil
popupLabel.style.borderRadius = "4px";
popupLabel.style.fontWeight = "600";
popupLabel.style.fontSize = "9px";         // kecil
popupLabel.style.boxShadow = "0 1px 3px rgba(0,0,0,0.15)";
popupLabel.style.pointerEvents = "auto";

// === Gambar popup kecil ===
const popupImage = document.createElement("img");
popupImage.src = "/images/popup.png"; 
popupImage.alt = "Perpustakaan";
popupImage.style.width = "40px";           // kecil
popupImage.style.borderRadius = "4px";
popupImage.style.boxShadow = "0 0 2px rgba(0,0,0,0.2)";
popupImage.style.pointerEvents = "auto";
popupImage.style.marginTop = "3px";

// === Gabungkan label dan gambar ===
popupContainer.appendChild(popupLabel);
popupContainer.appendChild(popupImage);

// === Popup awal di atas gedung ===
const initialPopup = new mapboxgl.Popup({
  offset: [0, -20],
  closeButton: false,
  closeOnClick: false,
  className: "library-popup"
})
  .setDOMContent(popupContainer)
  .setLngLat(perpustakaanCoords)
  .addTo(map.current);

// === Saat diklik: tampilkan info tanpa gambar ===
popupContainer.addEventListener("click", () => {
  const infoPopup = new mapboxgl.Popup({ offset: [0, -20] }).setHTML(`
    <div style="
      text-align: center;
      padding: 12px;
      background: #626f47;
      color: #fefae0;
      border-radius: 10px;
      border: 2px solid #fefae0;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      font-size: 13px;
    ">
      <h3 style="margin-bottom: 12px; font-size: 15px; color: #fefae0;">
        📚 Perpustakaan Yos Sudarso
      </h3>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <a href="https://perpus.upnyk.ac.id/" target="_blank"
          style="background: #fefae0; color: #004b23; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-weight: 500; transition: 0.3s;"
          onmouseover="this.style.background='#004b23'; this.style.color='#fefae0';"
          onmouseout="this.style.background='#fefae0'; this.style.color='#004b23';"
        >
          🌐 Website Perpustakaan
        </a>
        <a href="https://www.instagram.com/perpus.upnyk?igsh=d2F1NTRkMm13b3Rl" target="_blank"
          style="background: #fefae0; color: #c32aa3; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-weight: 500; transition: 0.3s;"
          onmouseover="this.style.background='#c32aa3'; this.style.color='#fefae0';"
          onmouseout="this.style.background='#fefae0'; this.style.color='#c32aa3';"
        >
          📷 Instagram
        </a>
        <a href="/virtual-tour/index.htm" target="_blank"
          style="background: #fefae0; color: #ff9f1c; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-weight: 500; transition: 0.3s;"
          onmouseover="this.style.background='#ff9f1c'; this.style.color='#fefae0';"
          onmouseout="this.style.background='#fefae0'; this.style.color='#ff9f1c';"
        >
          🎥 Virtual Tour
        </a>
      </div>
    </div>
  `);

  infoPopup.setLngLat(perpustakaanCoords).addTo(map.current);

  map.current.flyTo({
    center: perpustakaanCoords,
    zoom: 19,
    pitch: 60,
    bearing: -20,
    essential: true,
  });
});

    map.current.on("load", () => {
      add3DLayer();
      addRouteLayer();
      geolocate.trigger();
    });

    // Mendapatkan lokasi pengguna
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = [position.coords.longitude, position.coords.latitude];
        setUserCoords(coords);

        // Marker untuk pengguna
        const userIcon = document.createElement("div");
        userIcon.style.backgroundImage = "url(/user-icon.png)";
        userIcon.style.width = "32px";
        userIcon.style.height = "32px";
        userIcon.style.backgroundSize = "contain";
        userIcon.style.borderRadius = "50%";

        new mapboxgl.Marker(userIcon).setLngLat(coords).addTo(map.current);

        // Tambahkan directions control
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: "metric",
          profile: "mapbox/walking",
          alternatives: false,
          geometries: "geojson",
          controls: {
            inputs: true,
            instructions: true,
            profileSwitcher: true,
          },
        });

        directions.setOrigin(coords);
        directions.setDestination(perpustakaanCoords);

        directionsRef.current = directions;
        map.current.addControl(directions, "top-left");
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      map.current.setStyle(baseMaps[layer]);
      map.current.once("style.load", () => {
        add3DLayer();
        addRouteLayer();
      });
    }
  }, [layer]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "0vh", // Pastikan isi memenuhi tinggi layar
      marginBottom: "0px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "0px" }}>
        <div
          style={{
            width: "300px",
            backgroundColor: "#626f47",
            color: "#fefae0",
            borderRadius: "10px",
            padding: "10px",
            height: "fit-content",
            flexShrink: 0, // Prevent shrinking
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            <strong>PETUNJUK</strong>
          </h3>
          <div
            style={{
              backgroundColor: "#fefae0",
              color: "#1b1b1b",
              padding: "15px",
              borderRadius: "10px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>1.</strong> Gunakan tombol zoom dan rotasi di kanan atas.
            </p>
            <p>
              <strong>2.</strong> Titik A menunjukkan lokasi Anda.
            </p>
            <p>
              <strong>3.</strong> Titik B menunjukkan lokasi Tujuan.
            </p>
            <p>
              <strong>4.</strong> Gunakan panel arah untuk rute dan moda.
            </p>
          </div>

          <div style={{ marginTop: "15px" }}>
            <label>
              <strong>Ganti Layer Peta:</strong>
            </label>
            <select
              value={layer}
              onChange={(e) => setLayer(e.target.value)}
              style={{
                backgroundColor: "#fefae0",
                color: "#1b1b1b",
                width: "100%",
                marginTop: "5px",
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            >
              <option value="streets">🛣️ Mapbox Streets</option>
              <option value="satellite">🛰️ Satellite</option>
              <option value="light">🌤️ Light</option>
              <option value="custom">📚 Peta Virtual Perpustakaan</option>
            </select>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h4 style={{ marginBottom: "8px" }}>🔍 Keterangan Rute:</h4>
            <ul
              style={{ listStyle: "none", paddingLeft: 0, lineHeight: "1.8" }}
            >
              <li>
                <span style={{ color: "#e74c3c", fontWeight: "bold" }}>■</span>{" "}
                Rute Mobil
              </li>
              <li>
                <span style={{ color: "#2980b9", fontWeight: "bold" }}>■</span>{" "}
                Rute Motor
              </li>
              <li>
                <span style={{ color: "#27ae60", fontWeight: "bold" }}>■</span>{" "}
                Rute Jalan Kaki
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          position: "relative",
          width: "100%",
          height: "570px",
          marginLeft: "15px" // Tambah margin kiri untuk jarak dari panel
        }}>
          <div
            ref={mapContainer}
            style={{
              height: "90%",
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>

      {/* Spacer untuk memastikan ada yang bisa di-scroll */}

      <style jsx global>{`
        .custom-marker {
          cursor: pointer;
        }

        /* Force scrollbar to always be visible */
        html, body {
          overflow-y: scroll !important;
          height: auto !important;
        }

        /* Modern thin scrollbar */
        ::-webkit-scrollbar {
          width: 8px !important;
          background: rgba(0, 0, 0, 0.1) !important;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05) !important;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(98, 111, 71, 0.6) !important;
          border-radius: 4px;
          border: none !important;
          min-height: 20px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(98, 111, 71, 0.8) !important;
        }

        ::-webkit-scrollbar-thumb:active {
          background: rgba(98, 111, 71, 1) !important;
        }

        ::-webkit-scrollbar-corner {
          background: transparent;
        }

        /* Firefox scrollbar */
        * {
          scrollbar-width: thin !important;
          scrollbar-color: rgba(98, 111, 71, 0.6) rgba(0, 0, 0, 0.05) !important;
        }

        /* Make sure the page is scrollable */
        body {
          min-height: 100vh !important;
        }
      `}</style>
    </div>
  );
};
<div>
<Footer />
</div>
;

export default LocationAndAccess;
