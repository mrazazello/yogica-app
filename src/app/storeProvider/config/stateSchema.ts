import { AxiosInstance } from "axios";

import { IClassDetailSchema } from "@entities/classDetail";
import { IClassesHistorySchema } from "@entities/classesHistory/model/types/classesHistory";
import { IFavoritesSchema } from "@entities/favorites";
import { IPaymentsSchema } from "@entities/payments/model/types/payments";
import { IProfileSchema } from "@entities/profile";
import { ITariffsSchema } from "@entities/tariffs/model/types/tariff";
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
  classesHistory: IClassesHistorySchema;
  payments: IPaymentsSchema;
  tariffs: ITariffsSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  state: IStateSchema;
}
