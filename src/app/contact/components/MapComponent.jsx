"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [48.8584, 2.2945]; // Eiffel Tower

export default function LeafletMap() {
  return (
    <MapContainer
      center={center}
      zoom={16}
      className="w-[90%] m-auto h-96 my-10 rounded-2xl shadow-lg border-2 border-gray-200"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Eiffel Tower, Paris</Popup>
      </Marker>
    </MapContainer>
  );
}
