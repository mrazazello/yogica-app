import { AppLayout } from "@app/AppLayout";
import { PaymentsList } from "@entities/payments";

const Payments = () => {
  return (
    <AppLayout title="History of payments">
      <PaymentsList />
    </AppLayout>
  );
};

export default Payments;
