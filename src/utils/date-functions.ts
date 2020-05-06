export function convertDateToStr(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getNthDayBefore(dateStr: string, n: number): string {
  const dateNum = Number(new Date(dateStr));
  return convertDateToStr(new Date(dateNum - n * 86400000));
}

export function getNDaysArray(dateStr: string, n: number): string[] {
  const nDaysArray = [];
  for (let i = 0; i < n; ++i) {
    nDaysArray.push(getNthDayBefore(dateStr, i));
  }
  return nDaysArray;
}

export function getNDaysToBoolean(
  nDaysArray: string[],
  ledger: Set<string>
): boolean[] {
  return nDaysArray.map((dateStr) => (ledger.has(dateStr) ? true : false));
}
