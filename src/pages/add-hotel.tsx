import { nanoid } from 'nanoid';
import HotelForm from '../components/hotel-form';
import ManageBrands from '../components/manage-brands';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';
import { useNavigate } from 'react-router-dom';

const AddHotel = () => {
  const methods = useForm<Hotel>({
    defaultValues: {
      id: nanoid()
    }
  });
  const context = useContext(HotelsContext);
  if (!context) {
    throw new Error('NestedComponent must be used within a HotelProvider');
  }

  const { dispatchHotels } = context;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Hotel> = (data) => {
    console.log(data);
    dispatchHotels({ type: 'add', newHotel: data });
    methods.reset();
    navigate('/');
  };
  return (
    <div className="p-5">
      <FormProvider {...methods}>
        <HotelForm onSubmit={methods.handleSubmit(onSubmit)} />
      </FormProvider>

      <ManageBrands />
    </div>
  );
};
export default AddHotel;
