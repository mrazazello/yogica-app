import { AxiosInstance } from "axios";

import { IProfileSchema } from "@entities/profile/model/types/profile";
import { IUserSchema } from "@entities/user/model/types/user";
import { ILoginSchema } from "@features/authByLogin";
import { IStartClassSchema } from "@features/startClass";

export interface IStateSchema {
  loginForm: ILoginSchema;
  user: IUserSchema;
  startClass: IStartClassSchema;
  profile: IProfileSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}
