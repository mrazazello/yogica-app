import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

// import { createReducerManager } from "./reducerManager";
import { classDetailReducer } from "@entities/classDetail";
import { classesHistoryReducer } from "@entities/classesHistory";
import { errorsReducer } from "@entities/error";
import { favoritesReducer } from "@entities/favorites";
import { paymentsReducer } from "@entities/payments";
import { practiceSettingsReducer } from "@entities/practiceSettings";
import { profileReducer } from "@entities/profile";
import { tariffsReducer } from "@entities/tariffs/model/slice/tarifSlice";
import { userReducer } from "@entities/user";
import { loginReducer } from "@features/authByLogin";
import { registrationReducer } from "@features/registration";
import { startClassReducer } from "@features/startClass";
import { IStateSchema } from "./stateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    errors: errorsReducer,
    loginForm: loginReducer,
    regForm: registrationReducer,
    user: userReducer,
    startClass: startClassReducer,
    profile: profileReducer,
    classDetail: classDetailReducer,
    favorites: favoritesReducer,
    classesHistory: classesHistoryReducer,
    payments: paymentsReducer,
    tariffs: tariffsReducer,
    settings: practiceSettingsReducer
  };

  //   const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    devTools: import.meta.env.DEV
  });

  return store;
}

export type RootStateType = ReturnType<typeof createReduxStore>["getState"];
export type AppDispatchType = ReturnType<typeof createReduxStore>["dispatch"];
