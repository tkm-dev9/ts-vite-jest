import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const fp = flatpickr("#calendar", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  onChange: function (selectedDates, dateStr, instance) {
    console.warn({ selectedDates, dateStr, instance });
  },
  onOpen: function (selectedDates, dateStr, instance) {
    console.warn({ selectedDates, dateStr, instance });
  },
  onClose: function (selectedDates, dateStr, instance) {
    console.warn({ selectedDates, dateStr, instance });
  }
});

console.warn(fp);