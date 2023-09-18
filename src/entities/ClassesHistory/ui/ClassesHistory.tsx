import { ClassHistoryItem } from "./ClassHistoryItem";

const classes = [
  {
    id: "1",
    date: "29.06.2023 11:00",
    title: "Class #123",
    duration: "25",
    level: "Zero level",
  },
  {
    id: "2",
    date: "29.06.2023 11:00",
    title: "Class #123",
    duration: "25",
    level: "Zero level",
  },
  {
    id: "3",
    date: "29.06.2023 11:00",
    title: "Class #123",
    duration: "25",
    level: "Zero level",
  },
  {
    id: "4",
    date: "29.06.2023 11:00",
    title: "Class #123",
    duration: "25",
    level: "Zero level",
  },
  {
    id: "5",
    date: "29.06.2023 11:00",
    title: "Class #123",
    duration: "25",
    level: "Zero level",
  },
];

export const ClassesHistory = () => {
  return (
    <>
      {classes.map((item) => (
        <ClassHistoryItem key={item.id} item={item} />
      ))}
    </>
  );
};
