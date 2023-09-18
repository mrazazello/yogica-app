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

export const FavoritesList = () => {
  return (
    <div className="flex flex-col gap-20px">
      {favorites.map((item) => (
        <FavoritesItem key={item.id} item={item} />
      ))}
    </div>
  );
};
