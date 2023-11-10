import { AppLayout } from "@app/AppLayout";
import { OrderSubscription } from "@features/orderSubscription";
import { routePaths } from "@shared/config/router/routes";
import { VSpace } from "@shared/ui/vSpace/VSpace";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <AppLayout title="Order">
      <OrderSubscription />
      <VSpace />
      <Link to={routePaths.history.URL()} className="text-center">
        History of the payments
      </Link>
    </AppLayout>
  );
};

export default Order;
