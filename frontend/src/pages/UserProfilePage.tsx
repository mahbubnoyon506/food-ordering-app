import { useUpdateMyUser } from "@/api/MyUserAPI";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import React from "react";

const UserProfilePage = () => {
  const { updateUser, isPending } = useUpdateMyUser();
  return (
    <div>
      <UserProfileForm onSave={updateUser} isLoading={isPending} />
    </div>
  );
};

export default UserProfilePage;
