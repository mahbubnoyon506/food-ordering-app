import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantAPI";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurant = () => {
  const { createRestaurant, isPending } = useCreateMyRestaurant();
  const { restaurant, isLoading } = useGetMyRestaurant();

  console.log(restaurant);

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isPending}
    />
  );
};

export default ManageRestaurant;
