function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1, 25);
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

function checkStringLength(stringToCheck, maxLength) {
  if (stringToCheck.length <= maxLength) {
    return true;
  }
  return false;
}
checkStringLength("book", 5);
