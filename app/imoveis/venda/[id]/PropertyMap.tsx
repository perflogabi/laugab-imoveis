"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

interface PropertyMapProps {
  coordinates?: [number, number];
  address?: string;
  title?: string;
}

export default function PropertyMap({ 
  coordinates = [-22.971964, -43.182545], 
  address = "Copacabana, Rio de Janeiro - RJ",
  title = "Localização do imóvel"
}: PropertyMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Corrige o ícone padrão do marker para funcionar no Next.js
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-expect-error: Corrige bug do Leaflet no SSR
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

  if (!isClient) {
    return (
      <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">Carregando mapa...</p>
      </div>
    );
  }

  const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={coordinates}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      aria-label={`Mapa do imóvel: ${title}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates} icon={icon as L.Icon}>
        <Popup>
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-1">{title}</h3>
            <p className="text-xs text-gray-600">{address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
} 