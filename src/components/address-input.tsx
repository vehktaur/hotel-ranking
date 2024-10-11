import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const AddressInput = () => {
  const apiKey = import.meta.env.VITE_MAP_API_KEY;

  return (
    // Wrap input with API provider to use google API functionality
    <APIProvider apiKey={apiKey}>
      <Input />
    </APIProvider>
  );
};

const Input = () => {
  const { control, setValue } = useFormContext();

  const placesLibrary = useMapsLibrary('places');
  const addressInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Ensure places library is loaded and input reference is valid
    if (!placesLibrary || !addressInputRef.current) return;

    // Initialize the Autocomplete widget on the input field
    const autocompleteInstance = new google.maps.places.Autocomplete(
      addressInputRef.current
    );

    // Listener for when a place is selected from the dropdown
    autocompleteInstance.addListener('place_changed', () => {
      const place = autocompleteInstance.getPlace();
      if (place && place.formatted_address) {
        setValue('address', place.formatted_address); // Update input with selected address
      }
    });
  }, [placesLibrary]); // Run effect when places library is ready

  return (
    // Use Controller to manage form state for the input field
    <Controller
      name="address"
      control={control}
      rules={{ required: 'Please enter a valid address' }}
      render={({ field }) => (
        <input
          id="address"
          type="text"
          {...field}
          ref={addressInputRef}
          placeholder="e.g., 123 High Street"
        />
      )}
    />
  );
};

export default AddressInput;
