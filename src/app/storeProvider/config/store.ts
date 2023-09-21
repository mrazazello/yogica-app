import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { api } from "@shared/api/api";
// import { createReducerManager } from "./reducerManager";
import { userReducer } from "@entities/user/model/slice/userSlice";
import { loginReducer } from "@features/authByLogin/model/slice/loginSlice";
import { IStateSchema, IThunkExtraArg } from "./stateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    loginForm: loginReducer,
    user: userReducer
  };

  //   const reducerManager = createReducerManager(rootReducers);

  const extraArg: IThunkExtraArg = {
    api: api
  };

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    //   devTools: IS_DEV,
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
