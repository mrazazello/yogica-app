import { Link } from "react-router-dom";

import { routePaths } from "@shared/config/router/routes";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { IRadioOptions, RadioSelect } from "@shared/ui/radioSelect/RadioSelect";
import { SubscriptionItem } from "./SubscriptionItem";

const options: IRadioOptions[] = [
  {
    label: (
      <SubscriptionItem
        summ="120.00"
        membership="12 Month Membership"
        perDay="10.00"
        period="Month"
      />
    ),
    value: "1"
  },
  {
    label: (
      <SubscriptionItem
        summ="20.00"
        membership="1 Month Membership"
        perDay="0.67"
        period="Day"
      />
    ),
    value: "2"
  }
];

export const OrderSubscription = () => {
  return (
    <div className="flex flex-col gap-10px">
      <Alert
        type="error"
        title="Your trial period is activated"
        description="It will end on 14.09.2023 12:35 UTC. You can renew our service by clicking on 'Subscribe' button"
      />
      <RadioSelect data={options} selected="1" />
      <Button>Start</Button>
      <Link to={routePaths.history.URL()} className="text-center">
        History of the payments
      </Link>
    </div>
  );
};
