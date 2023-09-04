import { AppLayout } from "app/AppLayout";
import { Link } from "react-router-dom";
import { routePaths } from "shared/config/router/routes";
import { Alert } from "shared/ui/Alert/Alert";
import { Button } from "shared/ui/Button/Button";
import { VSpace } from "shared/ui/VSpace/VSpace";

const Orders = () => {
  return (
    <AppLayout title="Orders">
      <Alert
        type="warning"
        title="Your trial period is activated"
        description="
      It will end on 14.09.2023 12:35 UTC. You can renew our service by clicking on 'Subscribe' button"
      />
      <VSpace />

      <div className="flex items-center pl-4 border border-green-200 rounded-md">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-400 focus:ring-2"
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ml-2 text-sm font-medium text-black"
        >
          Default radio
        </label>
      </div>

      <div className="flex items-center pl-4 border border-gray-200 rounded-md">
        <input
          checked
          id="bordered-radio-2"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-400 focus:ring-2"
        />
        <label
          htmlFor="bordered-radio-2"
          className="w-full py-4 ml-2 text-sm font-medium text-black"
        >
          Checked state
        </label>
      </div>

      <VSpace />
      <Button text="Start" />
      <VSpace />
      <Link to={routePaths.history} className="text-center">
        History of the payments
      </Link>
    </AppLayout>
  );
};

export default Orders;
