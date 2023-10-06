import { AppLayout } from "@app/AppLayout";
import {
  PaymentsList,
  fetchPaymentsData,
  getPaymentsData,
  getPaymentsError,
  getPaymentsLoading
} from "@entities/payments";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Payments = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPaymentsData());
  }, [dispatch]);

  const data = useSelector(getPaymentsData);
  const error = useSelector(getPaymentsError);
  const loading = useSelector(getPaymentsLoading);

  return (
    <AppLayout title="History of payments">
      <PaymentsList data={data} error={error} isLoading={loading} />
    </AppLayout>
  );
};

export default Payments;
