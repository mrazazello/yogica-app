import { FC } from "react";

import { Alert } from "@shared/ui/alert/Alert";
import { PaymentListItem } from "@shared/ui/paymentListItem/PaymentListItem";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { IPayments } from "../model/types/payments";

interface IProps {
  data?: IPayments[];
  error?: string;
  isLoading?: boolean;
}

export const PaymentsList: FC<IProps> = (props) => {
  const { data, error, isLoading } = props;

  if (isLoading) {
    return <Preloader text="Loading payments data" />;
  }

  return (
    <>
      {error && <Alert title={error} />}
      {data &&
        data.map((item) => <PaymentListItem key={item.id} item={item} />)}
    </>
  );
};
