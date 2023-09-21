import { AppLayout } from "@app/AppLayout";
import { OrderSubscription } from "@entities/orderSubscription";

const Order = () => {
  return (
    <AppLayout title="Order">
      <OrderSubscription />
    </AppLayout>
  );
};

export default Order;
