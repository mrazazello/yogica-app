import { AxiosInstance } from "axios";

import { IClassDetailSchema } from "@entities/classDetail";
import { IFavoritesSchema } from "@entities/favorites";
import { IProfileSchema } from "@entities/profile";
import { IUserSchema } from "@entities/user";
import { ILoginSchema } from "@features/authByLogin";
import { IStartClassSchema } from "@features/startClass";

export interface IStateSchema {
  loginForm: ILoginSchema;
  user: IUserSchema;
  startClass: IStartClassSchema;
  profile: IProfileSchema;
  classDetail: IClassDetailSchema;
  favorites: IFavoritesSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  state: IStateSchema;
}
