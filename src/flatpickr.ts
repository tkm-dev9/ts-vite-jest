import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btn_7days = document.getElementById("7daysBtn");
const btn_14days = document.getElementById("14daysBtn");
const btn_21days = document.getElementById("21daysBtn");
const selectDay = document.getElementById("selectDay");
const startDay = document.getElementById("startDay") as HTMLInputElement | null;
const endDay = document.getElementById("endDay") as HTMLInputElement | null;

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

if (startDay) {
  flatpickr(startDay, {
    dateFormat: "Y-m-d H:i",
    onChange: handleDateChange,
  }); 
}

function handleDateChange(_selectedDates: Date[], dateStr: string) {
  selectStartDate = new Date(dateStr);
  calcEndDayAndSet();
}

function calcEndDayAndSet() {
  if (selectStartDate) {
    selectStartDate?.setDate(selectStartDate?.getDate() + selectPeriodDay);
    const calcEndDayStr = formatDateString(selectStartDate); 
    if(endDay) endDay.value = calcEndDayStr;
  }
}

function formatDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}