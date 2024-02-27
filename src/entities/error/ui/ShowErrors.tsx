import { useSelector } from "react-redux";

import { Alert } from "@shared/ui/alert/Alert";

import { getErrors } from "../model/selectors/getErrors";

export const ShowErrors = () => {
  const errors = useSelector(getErrors);

  return (
    <>
      {errors?.length ? (
        <Alert title={errors[errors?.length - 1].message} className="mb-20px" />
      ) : null}
    </>
  );
};
