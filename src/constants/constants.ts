export function calcCurrency(
  starting: string,
  quantity: string,
  ending: string
): string {
  return String(
    Math.round(((Number(starting) * Number(quantity)) / Number(ending)) * 100) /
      100
  );
}
