// взяла данную функцию с этого сайта:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// взяла на сайте:https://www.cyberforum.ru/javascript/thread1165903.html
var str = prompt("Введите строоку ", "");
var maxlegth = +prompt("Введите максимальную длинну ", "");
if (str == undefined || str == "") {
  alert("Строка не введена");
} else {
  truncate();
}
function truncate() {
  if (длина_строки >= заданной_длины) {
    // усекаем до нужной длины, добавляем троеточие и возвращаем
  } else {
    // возвращаем строку "как есть"
  }
}
