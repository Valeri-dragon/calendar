let deferentMonth = 0,
  dateEl = document.getElementById("date"),
  prevEl = document.getElementById("prev"),
  nextEl = document.getElementById("next"),
  daysEl = document.getElementById("days");
const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
let weekDays = ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."];
//функция генерации календаря
const generate = (count, toDay, start) => {
  let html = "";
  //цикл для проставления пустых блоков дням, если 1 число начинется с СБ или ВС, или ВТ.
  for (let i = 1; i < start; i++) {
    html += ` <div class="day other"></div>`;
  }
  //цикл создания дней до чсила, сколько их в месяце
  for (let i = 1; i <= count; i++) {
    let cl = "day";
    if (i === toDay) {
      cl += " today";
    }
    html += ` <div class="${cl}"> ${i} </div> `;
  }
  daysEl.innerHTML = html;
};
//функция вывода даты
const printDate = (day, d, year) => {
  //  months.forEach((item, index) => {
  //    if (index === month) {
  //      date.textContent =( day?day : '' )+ " " + item + " " + year;
  //    }
  //  });
  date.textContent = (day ? day : "") + " " + months[d.getMonth()] + " " + year;
};
//функция создания календаря
const create = () => {
  let d = new Date(); //создает новую дату на сегодняшний день
  d.setMonth(d.getMonth() + deferentMonth);
  let year = d.getFullYear(),
    month = d.getMonth(),
    dayCount = new Date(year, month + 1, 0).getDate(); //получили кол-во дней в месяце
  dayStart = new Date(year, month, 1).getDay(); // получили день недели, на который выпал 1 день месяца

  toDay = null;

  if (dayStart === 0) {
    dayStart = 7;
  }

  if (deferentMonth === 0) {
    toDay = d.getDate();
  }

  printDate(toDay, d, year);
  generate(dayCount, toDay, dayStart);
};

const prev = () => {
  deferentMonth--;
  create();
};

const next = () => {
  deferentMonth++;
  create();
};

create();

prevEl.addEventListener("click", prev);
nextEl.addEventListener("click", next);
