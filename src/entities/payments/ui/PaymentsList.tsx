import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { PaymentListItem } from "@shared/ui/paymentListItem/PaymentListItem";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";

import { getPaymentsData } from "../model/selectors/getPaymentsData/getPaymentsData";
import { getPaymentsError } from "../model/selectors/getPaymentsError/getPaymentsError";
import { getPaymentsLoading } from "../model/selectors/getPaymentsLoading/getPaymentsLoading";
import { fetchPaymentsData } from "../model/services/fetchPaymentsData/fetchPaymentsData";

interface IProps {}

export const PaymentsList: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPaymentsData());
  }, [dispatch]);

  const payments = useSelector(getPaymentsData);
  const error = useSelector(getPaymentsError);
  const isLoading = useSelector(getPaymentsLoading);

  if (isLoading) {
    return <Skeleton title rows={2} />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {payments &&
        payments.map((item) => <PaymentListItem key={item.id} item={item} />)}
    </>
  );
};
