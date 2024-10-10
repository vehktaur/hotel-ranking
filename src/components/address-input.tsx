import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

const AddressInput = () => {
  const apiKey = import.meta.env.VITE_MAP_API_KEY;

  return (
    <APIProvider apiKey={apiKey}>
      <Input />
    </APIProvider>
  );
};

const Input = () => {
  const { register, setValue } = useFormContext();

  const placesLib = useMapsLibrary('places');
  const addressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!placesLib || !addressRef.current) return;

    const autocompleteInstance = new google.maps.places.Autocomplete(
      addressRef.current
    );

    autocompleteInstance.addListener('place_changed', () => {
      const place = autocompleteInstance.getPlace();
      if (place && place.formatted_address) {
        setValue('address', place.formatted_address); // Update input with selected address
      }
    });
  }, [placesLib]);

  return (
    <input
      id="address"
      type="text"
      {...register('address', { required: true })}
      ref={addressRef}
      placeholder="e.g., 123 High Street"
    />
  );
};

export default AddressInput;
