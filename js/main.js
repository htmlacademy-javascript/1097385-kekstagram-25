// взяла данную функцию с этого сайта:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomInt(1, 5);

// взяла на сайте:https://www.cyberforum.ru/javascript/thread1165903.html
function checkStringLength(stringToCheck, maxLength) {
  if (stringToCheck.length <= maxLength) {
    return true;
  }
  return false;
}
checkStringLength('book', 5);
