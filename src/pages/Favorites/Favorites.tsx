import { AppLayout } from "app/AppLayout";
import { FavoritesItem } from "./FavoritesItem";

const favorites = [
  {
    id: "1",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level",
  },
  {
    id: "2",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level",
  },
  {
    id: "3",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level",
  },
  {
    id: "4",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level",
  },
];

const Favorites = () => {
  return (
    <AppLayout title="Favorites">
      {favorites.map((item) => (
        <FavoritesItem key={item.id} item={item} />
      ))}
    </AppLayout>
  );
};

export default Favorites;
