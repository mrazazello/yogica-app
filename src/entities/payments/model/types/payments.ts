export interface IPayments {
  id: string;
  date: string;
  sum: string;
  membership: string;
  periodFrom: string;
  periodTo: string;
}

export interface IPaymentsSchema {
  data?: IPayments[];
  isLoading: boolean;
  error?: string;
}
