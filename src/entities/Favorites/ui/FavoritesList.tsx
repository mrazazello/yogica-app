import { ClassListFullItem } from "@shared/ui/ClassListFullItem/ClassListFullItem";

const favorites = [
  {
    id: "1",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level"
  },
  {
    id: "2",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level"
  },
  {
    id: "3",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level"
  },
  {
    id: "4",
    title: "Class #111",
    url: "/temp/videoScreen.jpg",
    duration: "23",
    level: "Zero level"
  }
];

export const FavoritesList = () => {
  return (
    <div className="flex flex-col gap-20px">
      {favorites.map((item) => (
        <ClassListFullItem key={item.id} item={item} />
      ))}
    </div>
  );
};
