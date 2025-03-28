export function getMonthName(month: number): string {
  const names: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  if (month > 12 || month < 1) {
    throw new Error('Error: Month must be between 1 and 12.');
  }
  return names?.[month - 1];
}
