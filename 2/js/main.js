// взяла данную функцию с этого сайта:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// взяла на сайте:https://www.cyberforum.ru/javascript/thread1165903.html
function checkStringLength(stringToCheck, maxLength) {
  if (stringToCheck.length <= maxLength) {
    return true;
  }
  return false;
}
console.log(checkStringLength("тарелка", 8));
