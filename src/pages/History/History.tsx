import { AppLayout } from "app/AppLayout";
import { HistoryItem } from "./HistoryItem";

const orders = [
  {
    id: "1",
    date: "14.05.2023",
    summ: "10.00",
    plan: "Monthly Membership",
    period: "14.05.2023 — 21.05.2023",
  },
  {
    id: "2",
    date: "14.05.2023",
    summ: "10.00",
    plan: "Monthly Membership",
    period: "14.05.2023 — 21.05.2023",
  },
  {
    id: "3",
    date: "14.05.2023",
    summ: "10.00",
    plan: "Monthly Membership",
    period: "14.05.2023 — 21.05.2023",
  },
  {
    id: "4",
    date: "14.05.2023",
    summ: "10.00",
    plan: "Monthly Membership",
    period: "14.05.2023 — 21.05.2023",
  },
];

const History = () => {
  return (
    <AppLayout title="History of payments">
      {orders.map((item) => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </AppLayout>
  );
};

export default History;
