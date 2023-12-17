import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { formatKordinat } from "../../../libs/utils/formatCoordinat";
const Maps = ({ lat, lng }) => {
  const lata = formatKordinat(lat);
  const lnga = formatKordinat(lng);
  return (
    <MapContainer
      center={[lata, lnga]}
      zoom={13}
      style={{ height: "600px", width: "500px" }}
      className="border bg-red-700 p-7"
      dragging:false
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lata, lnga]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
