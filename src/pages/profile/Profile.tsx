import { AppLayout } from "@app/AppLayout";
import { ProfileCard } from "@entities/profile";

const Profile = () => {
  return (
    <AppLayout title="Profile">
      <ProfileCard />
    </AppLayout>
  );
};

export default Profile;
