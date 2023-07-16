"use client";
//应用
//style
//组件
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import { useStore } from "../../../store";
const url = {
  "en": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "cn": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "jp": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}
type TContactMap = {};

function ContactMap({ ...props }: TContactMap) {
  const [i18n] = useStore((state) => [state.i18n]);
  return (
    <MapContainer
      center={[39.085, 117.199]}
      zoom={6}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ width: "500px", height: "386px", marginTop: "40px" }}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[39.085, 117.199]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default ContactMap;
