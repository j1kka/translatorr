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

// Допишите код для fakeTranslate
export function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        // Имитация асинхронной операции с задержкой
        setTimeout(() => {
            const translation = dictionary[word.toLowerCase()];
            if (translation) {
                resolve(translation); 
            } else {
                reject("Слово не найдено в словаре");  
            }
        }, 1000); 
    });
}

