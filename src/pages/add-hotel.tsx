import { nanoid } from 'nanoid';
import HotelForm from '../components/hotel-form';
import ManageBrands from '../components/manage-brands';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { useNavigate } from 'react-router-dom';
import { useHotels } from '../hooks/hooks';

// Component to add a new hotel
const AddHotel = () => {
  // Initialize form methods with default values
  const methods = useForm<Hotel>({
    defaultValues: {
      id: nanoid() // Generate unique ID for the hotel
    }
  });

  // Get state for managing hotels
  const { dispatchHotels } = useHotels();
  const navigate = useNavigate();

  // Handler for form submission
  const onSubmit: SubmitHandler<Hotel> = (data) => {
    dispatchHotels({ type: 'add', newHotel: data }); // Dispatch action to add hotel
    methods.reset(); // Reset the form after submission
    navigate('/'); // Navigate back to the home page
  };
  return (
    <div className="p-5">
      <FormProvider {...methods}>
        {/* Hotel form for entering details */}
        <HotelForm onSubmit={methods.handleSubmit(onSubmit)} />
      </FormProvider>

      {/* Brand management component */}
      <ManageBrands />
    </div>
  );
};
export default AddHotel;
