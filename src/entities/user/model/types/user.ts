export interface IUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface IUserSchema {
  authData?: IUser;
  isLoading: boolean;
  error?: string;
}
