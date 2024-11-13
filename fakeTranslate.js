const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер"
};

function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dictionary[word]) {
                resolve(dictionary[word]);
            } else {
                reject("Перевод не найден");
            }
        }, 1000);
    });
}

export default fakeTranslate;
