import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { api } from "@shared/api/api";
// import { createReducerManager } from "./reducerManager";
import { userReducer } from "@entities/user/model/slice/userSlice";
import { loginReducer } from "@features/authByLogin/model/slice/loginSlice";
import { startClassReducer } from "@features/startClass/model/slice/startClassSlice";
import { IStateSchema, IThunkExtraArg } from "./stateSchema";
import { profileReducer } from "@entities/profile";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    loginForm: loginReducer,
    user: userReducer,
    startClass: startClassReducer,
    profile: profileReducer
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
