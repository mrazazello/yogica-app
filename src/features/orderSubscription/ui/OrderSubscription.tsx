import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import {
  fetchTariffs,
  getTariffsData,
  getTariffsError,
  getTariffsLoading
} from "@entities/tariffs";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";

import { RadioSelect } from "@shared/ui/radioSelect/RadioSelect";
import { Skeleton } from "@shared/ui/skeleton/Skeleton";
import { SubscriptionItem } from "./SubscriptionItem";

export const OrderSubscription = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTariffs());
  }, [dispatch]);

  const tariffs = useSelector(getTariffsData);
  const error = useSelector(getTariffsError);
  const loading = useSelector(getTariffsLoading);

  const options = useMemo(
    () =>
      tariffs?.map((item) => {
        return {
          label: (
            <SubscriptionItem
              summ={item.price}
              membership={item.membership}
              perDay={(Number(item.price) / 12).toFixed(2).toString()}
              period={item.period}
            />
          ),
          value: item.id
        };
      }),
    [tariffs]
  );

  if (loading) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }

  return (
    <div className="flex flex-col gap-10px">
      <Alert
        type="warning"
        title="Your trial period is activated"
        description="It will end on 14.09.2023 12:35 UTC. You can renew our service by clicking on 'Subscribe' button"
      />
      {error && <Alert title={error} type="error" />}
      {options && <RadioSelect data={options} selectedValue="1" />}
      <Button disabled>Purchase</Button>
    </div>
  );
};
