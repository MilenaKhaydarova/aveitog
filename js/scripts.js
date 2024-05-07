const serviceName = [
  "Планировочное решение",
  "Индивидуальный проект интерьера",
  "Авторский надзор",
];

function closewindow() {
  document.getElementById("window").classList.remove("flex");
}
function showwindow() {
  document.getElementById("window").classList.add("flex");
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function setservice(id) {
  document.getElementById("servicerec").innerText = serviceName[id];
}

function sendapplication() {
  let service = 0;
  let selecthouse = document.getElementById("selecthouse").value;
  let selectproject = document.getElementById("selectproject").value;
  let selectcity = document.getElementById("selectcity").value;
  let selectmoney = document.getElementById("selectmoney").value;
  let applicationname = document.getElementById("applicationname").value;
  let applicationphone = document.getElementById("applicationphone").value;

  if (
    selecthouse == "" ||
    selectproject == "" ||
    selectcity == "" ||
    selectmoney == "" ||
    applicationname == "" ||
    applicationphone == ""
  ) {
    alert("Заполните все поля!");
    return;
  }

  if (
    isNaN(applicationphone) ||
    (applicationphone.length !== 6 && applicationphone.length !== 11)
  ) {
    alert("Введите корректный номер телефона (6 или 11 цифр)!");
    return;
  }

  if (!/^[a-zA-ZА-Яа-яЁё]+$/.test(applicationname)) {
    alert("Введите корректное имя (только буквы)!");
    return;
  }

  if (selectproject == "Обновление") {
    service = 0;
  } else if (selectproject == "Ремонт") {
    service = 1;
  } else if (selectproject == "Улучшение функциональности") {
    service = 2;
  }

  setservice(service);
  showwindow();
}

window.addEventListener("scroll", reveal);
