interface IErrorDebugDetails {
  trace: string;
}

interface IErrorValidationDetails {
  violations: {
    code: string;
    message: string;
    field: string;
  }[];
}

export interface IError {
  code: string;
  message: string;
  details?: IErrorDebugDetails | IErrorValidationDetails;
}

export interface IErrorSchema {
  errors: IError[];
}
