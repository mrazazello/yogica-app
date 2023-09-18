import { AppLayout } from "@app/AppLayout";
import { OrderSubscription } from "@entities/OrderSubscription";

const Order = () => {
  return (
    <AppLayout title="Order">
      <OrderSubscription />
    </AppLayout>
  );
};

export default Order;
