import { setKey, fromAddress } from 'react-geocode';
import { useEffect, useState } from 'react';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

// Map component for rendering a map based on address
const CustomMap = ({ address, name }: { address: string; name: string }) => {
  const [center, setCenter] = useState<google.maps.LatLngLiteral | undefined>();

  // Set API key for geocoding service
  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;
  setKey(apiKey || '');

  // Fetch and set the position using the provided address
  useEffect(() => {
    const getPosition = async () => {
      try {
        const res = await fromAddress(address);
        if (res && res.results && res.results[0]) {
          const { lat, lng } = res.results[0].geometry.location;
          setCenter({ lat, lng });
        }
      } catch (error) {
        console.error('Error fetching geocode data:', error);
      }
    };

    getPosition();
  }, [address]);

  // Show a loading message until position is determined
  if (!center) {
    return <div className="h-[30rem] grid place-items-center">Loading...</div>;
  }

  return (
    <div className="h-[30rem] max-w-3xl mx-auto rounded-xl overflow-hidden">
      <APIProvider apiKey={apiKey} language="en">
        <Map
          className="size-full"
          defaultCenter={center}
          defaultZoom={18}
          mapId={mapId}
        >
          <AdvancedMarker position={center} title={name} />
        </Map>
      </APIProvider>
    </div>
  );
};
export default CustomMap;
