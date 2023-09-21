import { IUserSchema } from "@entities/user/model/types/user";
import { ILoginSchema } from "@features/authByLogin";
import { AxiosInstance } from "axios";

export interface IStateSchema {
  loginForm: ILoginSchema;
  user: IUserSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
