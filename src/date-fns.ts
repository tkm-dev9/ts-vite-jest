import { format, getDay, isFuture, isPast, isSunday, max, min, monthsToYears, secondsToHours, set } from "date-fns";

//date-fns

console.warn(format(new Date(), "MM/dd/yyyy")); //08/09/2024
console.warn(isFuture(new Date(2015, 10, 31))); //false
console.warn(isPast(new Date(2015, 10, 31))); //true

console.warn(max([
  new Date(1999, 0, 10),
  new Date(1997, 9, 9),
  new Date(2000, 5, 8),
  new Date()
])); //Fri Aug 09 2024 22:57:42 GMT+0900 (日本標準時)

console.warn(min([
  new Date(1999, 0, 10),
  new Date(1997, 9, 9),
  new Date(2000, 5, 8),
  new Date()
])); //Thu Oct 09 1997 00:00:00 GMT+0900 (日本標準時)

console.warn(set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })); //Tue Oct 20 2015 00:00:00 GMT+0900 (日本標準時)

console.warn(monthsToYears(35)); //2 (2年を意味する)

console.warn(secondsToHours(3600)); //1 (1時間を意味する)

console.warn(getDay(new Date())); //5 (金曜を意味する)

console.warn(isSunday(new Date())); //false
