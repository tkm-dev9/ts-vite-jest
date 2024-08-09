import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

//dayjs
dayjs.extend(minMax);

console.warn(dayjs().format()); //2024-08-07T22:49:38+09:00

console.warn(dayjs().minute()); //55 (55分を意味する)
console.warn(dayjs().hour()); //22 (22時を意味する)
console.warn(dayjs().date()); //7  (7日を意味する)
console.warn(dayjs().day()); //3 (水曜を意味する 0=日曜)
console.warn(dayjs().month()); //7 (8月を意味する 0=1月)
console.warn(dayjs().year()); //2024 (2024年を意味する)

console.warn(dayjs.max(dayjs(), dayjs("2018-01-01"), dayjs("2019-01-01")).year()); //2024 (一番新しい年)


console.warn(dayjs("2019-01-25").add(1, "day").subtract(1, "year").toString()); //Thu, 25 Jan 2018 15:00:00 GMT
console.warn(dayjs("2019-01-25").add(1, "day").subtract(1, "year").year(2009).toString()); //Sun, 25 Jan 2009 15:00:00 GMT

console.warn(dayjs().daysInMonth()); //31 (月の日数)
console.warn(dayjs().toDate()); //Wed Aug 07 2024 23:12:21 GMT+0900 (日本標準時) (jsのDateオブジェクトに変換)



