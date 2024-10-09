import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { setKey, fromAddress } from 'react-geocode';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const Map = ({ address, name }: { address: string; name: string }) => {
  const [position, setPosition] = useState<LatLngExpression | undefined>(
    undefined
  );

  const apiKey = 'AIzaSyBCuhmrV8Nm2CRX-3sx9KPkgumGqWmNyvI';

  setKey(apiKey || '');

  useEffect(() => {
    const getPosition = async () => {
      try {
        const res = await fromAddress(address);
        if (res && res.results && res.results[0]) {
          const { lat, lng } = res.results[0].geometry.location;
          setPosition([lat, lng]);
        }
      } catch (error) {
        console.error('Error fetching geocode data:', error);
      }
    };

    getPosition();
  }, [position]);

  if (!position) {
    return <div className="h-[30rem] grid place-items-center">Loading...</div>;
  }

  return (
    <div className="h-[30rem] max-w-3xl mx-auto rounded-xl overflow-hidden">
      <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position!}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
