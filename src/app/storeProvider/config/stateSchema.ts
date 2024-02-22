import { AxiosInstance } from "axios";

import { IClassDetailSchema } from "@entities/classDetail";
import { IClassesHistorySchema } from "@entities/classesHistory";
import { IErrorSchema } from "@entities/error/model/types/error";
import { IFavoritesSchema } from "@entities/favorites";
import { IPaymentsSchema } from "@entities/payments/model/types/payments";
import { IPracticeSettingsSchema } from "@entities/practiceSettings";
import { IProfileSchema } from "@entities/profile";
import { ITariffsSchema } from "@entities/tariffs/model/types/tariff";
import { IUserSchema } from "@entities/user";
import { ILoginSchema } from "@features/authByLogin";
import { IRegistrationSchema } from "@features/registration";
import { IStartClassSchema } from "@features/startClass";

export interface IStateSchema {
  errors: IErrorSchema;
  loginForm: ILoginSchema;
  regForm: IRegistrationSchema;
  user: IUserSchema;
  settings: IPracticeSettingsSchema;
  profile: IProfileSchema;
  startClass: IStartClassSchema;
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
