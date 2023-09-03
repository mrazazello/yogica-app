import { AppLayout } from "app/AppLayout";
import { ProgressItem } from "./ProgressItem";

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

function Progress() {
  return (
    <AppLayout title="Progress">
      {classes.map((item) => (
        <ProgressItem key={item.id} item={item} />
      ))}
    </AppLayout>
  );
}

export default Progress;
