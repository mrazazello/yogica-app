import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userActions, userReducer } from "./model/slice/userSlice";
import { IUser, IUserSchema } from "./model/types/user";

export { getUserAuthData, userActions, userReducer };
export type { IUser, IUserSchema };
