export interface ITariff {
  id: string;
  membership: string;
  price: string;
  period: string;
}

export interface ITariffsSchema {
  data?: ITariff[];
  isLoading: boolean;
}
