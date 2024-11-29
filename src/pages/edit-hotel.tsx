import HotelForm from '../components/hotel-form';
import ManageBrands from '../components/manage-brands';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalState } from '../hooks/hooks';

// Component for editing an existing hotel's details
const EditHotel = () => {
  const { id } = useParams();

  // Access hotels state for managing hotel data
  const { hotels, dispatch } = useGlobalState();
  const navigate = useNavigate();

  // Find the hotel by ID from context
  const hotel = hotels.find((hotel) => hotel.id === id);

  // Initialize form with hotel's current details as default values
  const methods = useForm<Hotel>({
    defaultValues: {
      id: hotel?.id,
      name: hotel?.name,
      city: hotel?.city,
      country: hotel?.country,
      brand: hotel?.brand,
      address: hotel?.address,
      rating: hotel?.rating,
      review: hotel?.review,
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<Hotel> = (data) => {
    dispatch({ type: 'editHotel', newHotel: data });
    navigate(-1);
  };

  return (
    <div className="p-5">
      <FormProvider {...methods}>
        {/* Hotel form for editing details */}
        <HotelForm onSubmit={methods.handleSubmit(onSubmit)} edit={true} />
      </FormProvider>

      {/* Component to manage associated brands */}
      <ManageBrands />
    </div>
  );
};
export default EditHotel;
