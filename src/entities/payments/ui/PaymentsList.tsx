import { FC } from "react";

import { Alert } from "@shared/ui/alert/Alert";
import { PaymentListItem } from "@shared/ui/paymentListItem/PaymentListItem";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";
import { IPayments } from "../model/types/payments";

interface IProps {
  data?: IPayments[];
  error?: string;
  isLoading?: boolean;
}

export const PaymentsList: FC<IProps> = (props) => {
  const { data, error, isLoading } = props;

  if (isLoading) {
    return <Skeleton title rows={2} />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {data &&
        data.map((item) => <PaymentListItem key={item.id} item={item} />)}
    </>
  );
};
