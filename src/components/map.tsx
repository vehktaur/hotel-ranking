import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { setKey, fromAddress } from 'react-geocode';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';

// Map component for rendering a map based on address
const Map = ({ address, name }: { address: string; name: string }) => {
  // State to store the map position based on geocoding results
  const [position, setPosition] = useState<LatLngExpression | undefined>(
    undefined
  );

  // Set API key for geocoding service
  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  setKey(apiKey || '');

  // Fetch and set the position using the provided address
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
  }, [address]);

  // Show a loading message until position is determined
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
        <Marker
          position={position!}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })
          }
        >
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
