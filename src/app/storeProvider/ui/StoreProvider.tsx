import { DeepPartial } from "@reduxjs/toolkit";
import { setupAxios } from "@shared/api/api";
import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { IStateSchema } from "../config/stateSchema";
import { createReduxStore } from "../config/store";

interface IProps {
  initialState?: DeepPartial<IStateSchema>;
  children: React.ReactElement;
}

export const StoreProvider: FC<IProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as IStateSchema);

  useEffect(() => {
    setupAxios(store);
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
};
