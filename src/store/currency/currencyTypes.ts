export interface Currency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface CurrencyState {
  list: Currency[];
  ratioBaseCurrency: number;
  pastPrice: number;
  searchValue: string;
  loading: boolean;
  error: string | null;
}
