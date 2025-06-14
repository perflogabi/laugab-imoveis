"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Corrige o ícone padrão do marker para funcionar no Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export default function PropertyMap() {
  // Corrige bug do leaflet no SSR
  useEffect(() => {
    // @ts-expect-error
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: icon.options.iconUrl,
      iconUrl: icon.options.iconUrl,
      shadowUrl: icon.options.shadowUrl,
    });
  }, []);

  return (
    <MapContainer
      center={[-22.971964, -43.182545] as [number, number]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      aria-label="Mapa do imóvel em Copacabana"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-22.971964, -43.182545] as [number, number]} icon={icon as L.Icon}>
        <Popup>
          Copacabana, Rio de Janeiro - RJ
        </Popup>
      </Marker>
    </MapContainer>
  );
} 