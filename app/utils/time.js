export const months = [
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
  'December',
];

export function doublePrecision(number) {
  return `0${number}`.slice(-2);
}

export function dateToStringDashed(date) {
  const month = doublePrecision(date.getMonth() + 1);
  const day = doublePrecision(date.getDate());
  return `${date.getFullYear()}-${month}-${day}`;
}

export function generateLength(minutes) {
  const time = { total: minutes };

  time.minutes = minutes % 60;

  const hours = Math.floor(minutes / 60);
  if (hours) {
    time.hours = hours;
  }

  return time;
}

export function dateToString(string) {
  const date = new Date(parseInt(string, 10));
  const month = months[date.getMonth()];
  return `${date.getDay()} ${month} ${date.getFullYear()}`;
}
