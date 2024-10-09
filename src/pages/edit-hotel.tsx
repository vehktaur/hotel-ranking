import HotelForm from '../components/hotel-form';
import ManageBrands from '../components/manage-brands';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { useNavigate, useParams } from 'react-router-dom';
import { useHotels } from '../hooks/hooks';

// Component for editing an existing hotel's details
const EditHotel = () => {
  const { id } = useParams();

  // Access hotels state for managing hotel data
  const { hotels, dispatchHotels } = useHotels();
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
      address: hotel?.address,
      rating: hotel?.rating,
      review: hotel?.review
    }
  });

  // Handle form submission
  const onSubmit: SubmitHandler<Hotel> = (data) => {
    dispatchHotels({ type: 'edit', newHotel: data });
    navigate(`/${hotel?.name}__${hotel?.id}`);
  };

  return (
    <div className="p-5">
      <FormProvider {...methods}>
        {/* Hotel form for editing details */}
        <HotelForm
          onSubmit={methods.handleSubmit(onSubmit)}
          edit={true}
          hotel={hotel}
        />
      </FormProvider>

      {/* Component to manage associated brands */}
      <ManageBrands />
    </div>
  );
};
export default EditHotel;
