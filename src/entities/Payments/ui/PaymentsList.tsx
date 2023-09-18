import { PaymentListItem } from "@shared/ui/PaymentListItem/PaymentListItem";

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

export const PaymentsList = () => {
  return (
    <>
      {orders.map((item) => (
        <PaymentListItem key={item.id} item={item} />
      ))}
    </>
  );
};
