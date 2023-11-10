import { AppLayout } from "@app/AppLayout";
import { FavoritesList } from "@entities/favorites";

const Favorites = () => {
  return (
    <AppLayout title="Favorites">
      <FavoritesList />
    </AppLayout>
  );
};

export default Favorites;
