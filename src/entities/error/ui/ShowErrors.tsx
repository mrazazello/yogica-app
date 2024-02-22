import { useSelector } from "react-redux";

import { Alert } from "@shared/ui/alert/Alert";

import { getErrors } from "../model/selectors/getErrors";

export const ShowErrors = () => {
  const errors = useSelector(getErrors);

  return (
    <>
      {errors?.length
        ? errors.map((item, index) => (
            <Alert key={index} title={item.message} className="mb-20px" />
          ))
        : null}
    </>
  );
};
