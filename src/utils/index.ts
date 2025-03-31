export function formatAmount(priceString: string): string {
  if (!priceString) return '';

  const cleanedValue = priceString.replace(/[^\d]/g, '');

  if (cleanedValue === '') return '';

  const numberValue = Number(cleanedValue);

  if (numberValue === 0) return '';

  const formattedValue = (numberValue / 100).toFixed(2);

  return formattedValue;
}