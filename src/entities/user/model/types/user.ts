export interface IUser {
  token: string;
}

export interface IUserSchema {
  authData?: IUser;
  isLoading: boolean;
  error?: string;
}
