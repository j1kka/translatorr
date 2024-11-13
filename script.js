let favorites = [];

// Функция для перевода слова с использованием fakeTranslate
async function translateWord() {
    const word = document.getElementById("wordInput").value.trim();
    if (!word) {
        alert("Введите слово для перевода.");
        return;
    }

    try {
        // Используем fakeTranslate для получения перевода
        const translation = await fakeTranslate(word);
        document.getElementById("translationResult").innerText = translation; // Отображаем перевод

        // Разблокируем кнопку "Сохранить в избранное"
        document.getElementById("saveButton").disabled = false;
    } catch (error) {
        document.getElementById("translationResult").innerText = error; // Показываем ошибку, если слово не найдено
    }
}

// Сохранение перевода в избранное
function saveTranslation() {
    const word = document.getElementById("wordInput").value.trim();
    const translation = document.getElementById("translationResult").innerText;

    favorites.push({ word, translation });
    updateFavorites();
    document.getElementById("saveButton").disabled = true;

    alert(`Сохранено: ${word} - ${translation}`);
}

// Обновление списка избранного
function updateFavorites() {
    const favoritesList = document.getElementById("favoritesList");
    favoritesList.innerHTML = ""; // Очистить список

    if (favorites.length === 0) {
        const message = document.createElement("li");
        message.innerText = "Нет избранных переводов.";
        favoritesList.appendChild(message);
    } else {
        favorites.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.word} - ${item.translation}`;
            
            const removeButton = document.createElement("button");
            removeButton.innerText = "Удалить";
            removeButton.addEventListener("click", () => removeFavorite(index));
            
            listItem.appendChild(removeButton);
            favoritesList.appendChild(listItem);
        });
    }
}

// Удаление перевода из избранного
function removeFavorite(index) {
    favorites.splice(index, 1);  // Удаляем элемент из списка избранного
    updateFavorites();
    alert("Перевод удален из избранного.");
}

// Добавление обработчиков событий
document.getElementById("translateButton").addEventListener("click", translateWord);
document.getElementById("saveButton").addEventListener("click", saveTranslation);
