import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btn_7days = document.getElementById("7daysBtn");
const btn_14days = document.getElementById("14daysBtn");
const btn_21days = document.getElementById("21daysBtn");
const selectDay = document.getElementById("selectDay");
const startDay = document.getElementById("startDay");
const endDay = document.getElementById("endDay");

let selectPeriodDay: number = 0;
let selectStartDate: Date | null = null;

const periodButtons = [
  { element: btn_7days, days: 7 },
  { element: btn_14days, days: 14 },
  { element: btn_21days, days: 21 }
];

periodButtons.forEach(button => {
  button.element?.addEventListener("click", () => {
    selectPeriodDay = button.days;
    if (selectDay) selectDay.textContent = `${selectPeriodDay}日`;
    if (selectStartDate) calcEndDayAndSet();
  });
});

const fp = flatpickr(startDay!, {
  dateFormat: "Y-m-d H:i",
  onChange: handleDateChange,
  onOpen: function (selectedDates, dateStr, instance) {
    console.warn({ selectedDates, dateStr, instance });
  },
  onClose: function (selectedDates, dateStr, instance) {
    console.warn({ selectedDates, dateStr, instance });
  }
});

function handleDateChange(selectedDates: Date[], dateStr: string) {
  selectStartDate = new Date(dateStr);
  calcEndDayAndSet();
}

function calcEndDayAndSet() {
  selectStartDate?.setDate(selectStartDate?.getDate() + selectPeriodDay);
  const calcEndDayStr = formatDateString(selectStartDate!);
  (endDay as HTMLInputElement).value = calcEndDayStr;
}

function formatDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}