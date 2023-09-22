import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { api } from "@shared/api/api";
// import { createReducerManager } from "./reducerManager";
import { classDetailReducer } from "@entities/classDetail";
import { favoritesReducer } from "@entities/favorites";
import { profileReducer } from "@entities/profile";
import { userReducer } from "@entities/user";
import { loginReducer } from "@features/authByLogin";
import { startClassReducer } from "@features/startClass";

import { IStateSchema, IThunkExtraArg } from "./stateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    loginForm: loginReducer,
    user: userReducer,
    startClass: startClassReducer,
    profile: profileReducer,
    classDetail: classDetailReducer,
    favorites: favoritesReducer
  };

  //   const reducerManager = createReducerManager(rootReducers);

  const extraArg: IThunkExtraArg = {
    api: api
  };

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    devTools: true, // нужно пробросить из .env
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      })
  });

  return store;
}

export type RootStateType = ReturnType<typeof createReduxStore>["getState"];
export type AppDispatchType = ReturnType<typeof createReduxStore>["dispatch"];
