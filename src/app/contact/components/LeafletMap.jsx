// 'use client';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// // Coordinates of Eiffel Tower
// const center = [48.8584, 2.2945];

// export default function LeafletMap() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={16}
//       className="w-[90%] m-auto h-100 my-10 rounded-2xl shadow-lg border-2 border-gray-200"
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={center}>
//         <Popup>Eiffel Tower, Paris</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }
// app/contact/components/LeafletMap.tsx
"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-[90%] m-auto h-96 my-10 flex items-center justify-center border rounded-2xl shadow-lg">
      <p>Loading map...</p>
    </div>
  ),
});

export default function LeafletMap() {
  return <Map />;
}

