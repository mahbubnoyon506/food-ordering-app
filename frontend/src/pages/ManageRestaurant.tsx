import { useCreateMyRestaurant } from "@/api/MyRestaurantAPI";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurant = () => {
  const { createRestaurant, isPending } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isPending} />
  );
};

export default ManageRestaurant;
