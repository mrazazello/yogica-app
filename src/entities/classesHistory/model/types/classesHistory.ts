export interface IClassesHistory {
  id: string;
  duration: string;
  level: string;
  videoPreview: string;
  date: string;
}

export interface IClassesHistorySchema {
  data?: IClassesHistory[];
  isLoading: boolean;
  error?: string;
}
