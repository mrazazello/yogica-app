import { AppLayout } from "@app/AppLayout";
import { PaymentsList } from "@entities/Payments";

const Payments = () => {
  return (
    <AppLayout title="History of payments">
      <PaymentsList />
    </AppLayout>
  );
};

export default Payments;
