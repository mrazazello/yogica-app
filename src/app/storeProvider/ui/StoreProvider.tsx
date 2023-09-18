import { DeepPartial } from "@reduxjs/toolkit";
import { FC } from "react";
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

  return <Provider store={store}>{children}</Provider>;
};
