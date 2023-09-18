import { Link } from "react-router-dom";

import { routePaths } from "@shared/config/router/routes";
import { Alert } from "@shared/ui/Alert/Alert";
import { Button } from "@shared/ui/Button/Button";
import { Price } from "@shared/ui/Price/Price";
import { RadioBordered } from "@shared/ui/RadioBordered/RadioBordered";
import { TextLine } from "@shared/ui/Text/TextLine";

const El1 = (
  <div className="w-full flex justify-between">
    <div>
      <Price sum="120.00" />
      <TextLine text="12 Month Membership" />
    </div>
    <div>
      <Price sum="10.00" />
      <TextLine text="/ Day" />
    </div>
  </div>
);

const El2 = (
  <div className="w-full flex justify-between">
    <div>
      <Price sum="20.00" />
      <TextLine text="12 Month Membership" />
    </div>
    <div>
      <Price sum="0.67" />
      <TextLine text="/ Day" />
    </div>
  </div>
);

const options = [
  {
    label: El1,
    value: "1"
  },
  {
    label: El2,
    value: "2"
  },
  {
    label: "sadasdas",
    value: "3"
  }
];

export const OrderSubscription = () => {
  return (
    <div className="flex flex-col gap-10px">
      <Alert
        type="warning"
        title="Your trial period is activated"
        description="It will end on 14.09.2023 12:35 UTC. You can renew our service by clicking on 'Subscribe' button"
      />

      <RadioBordered data={options} name="tariff" selected="1" />

      <Button text="Start" />
      <Link to={routePaths.history} className="text-center">
        History of the payments
      </Link>
    </div>
  );
};
