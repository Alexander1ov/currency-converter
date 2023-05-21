export interface CurrencyData {
  name: string;
  quantity: string;
  price: string;
}
export interface ConverterState {
  startingCurrency: CurrencyData;
  endingCurrency: CurrencyData;
}
