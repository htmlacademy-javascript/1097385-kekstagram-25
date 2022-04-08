
const NAMES = [
  "Маша",
  "Артем",
  "Катя",
  "Егор",
  "Алена",
  "Рома",
  "Арина",
  "Евгений",
  "Евгения",
  "Рамина",
  "Жора",
  "Коля",
  "Дима",
  "Андрей",
  "Ангелина",
  "Вика",
  "София",
  "Анастасия",
  "Валя",
  "Юля",
  "Юлиана",
  "Григорий",
  "Виталий",
  "Юрий",
  "Дарья",
];
const COMMENTS = [
  "Супер",
  "Класс",
  "Лайк",
  "Классное фото",
  "Круто",
  "Отлично",
];

function generatePhotos() {
  const photos = [];
  for (let index = 0; index < 25; index++) {
    const photo = {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: "описание картинки",
      likes: getRandomInt(15, 200),
      comments: [
        {
          id: index + 30,
          avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
          message: COMMENTS[getRandomInt(0, 5)],
          name: NAMES[getRandomInt(0, 24)],
        },
      ],
    };
    photos.push(photo);
  }
  return photos;
}

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

