import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

// import { createReducerManager } from "./reducerManager";
import { classDetailReducer } from "@entities/classDetail";
import { classesHistoryReducer } from "@entities/classesHistory";
import { favoritesReducer } from "@entities/favorites";
import { paymentsReducer } from "@entities/payments";
import { profileReducer } from "@entities/profile";
import { userReducer } from "@entities/user";
import { loginReducer } from "@features/authByLogin";
import { startClassReducer } from "@features/startClass";

import { tariffsReducer } from "@entities/tariffs/model/slice/tarifSlice";
import { IStateSchema } from "./stateSchema";
import { practiceSettingsReducer } from "@entities/practiceSettings";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    loginForm: loginReducer,
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
