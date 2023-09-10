import { AppLayout } from "@app/AppLayout";
import { FavoritesList } from "@features/Favorites";

const Favorites = () => {
  return (
    <AppLayout title="Favorites">
      <FavoritesList />
    </AppLayout>
  );
};

export default Favorites;
