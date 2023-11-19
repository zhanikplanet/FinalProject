// Получение ссылок на поле ввода и контейнер результатов
var searchInput = document.getElementById('searchInput');
var searchResults = document.getElementById('searchResults');

// Обработчик события для срабатывания поиска при вводе
searchInput.addEventListener('input', function() {
  // Получение значения из поискового поля
  var query = searchInput.value.toLowerCase();

  // Фильтрация данных на основе поискового запроса
  var results = data.filter(function(item) {
    return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
  });

  // Отображение результатов поиска
  displayResults(results);
});

// Добавление обработчика события для очистки результатов при удалении ключевых слов
searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Backspace' && searchInput.value === '') {
    // Если пользователь удалил все символы, очистите результаты
    searchResults.innerHTML = '';
  }
});

// Создаем пустой массив для хранения данных
var data = [];

// Функция для извлечения текста из элемента
function extractText(element) {
  if (element) {
    return element.innerText.trim();
  }
  return '';
}

// Получаем заголовок страницы
var pageTitle = extractText(document.querySelector('head title'));
data.push({ title: 'Page Title', content: pageTitle });

// Получаем текст из всех параграфов
var paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(paragraph, index) {
  var paragraphText = extractText(paragraph);
  data.push({ title: 'Paragraph ' + (index + 1), content: paragraphText });
});

// Получаем текст из атрибутов alt у изображений
var images = document.querySelectorAll('img');
images.forEach(function(image, index) {
  var altText = image.alt;
  data.push({ title: 'Image ' + (index + 1), content: altText });
});

// Выводим данные в консоль (можете изменить на сохранение в переменную или отправку на сервер)
console.log(data);

  
  // Функция для выполнения поиска
  function search() {
    var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('searchResults');
  
    // Получение значения из поискового поля
    var query = searchInput.value.toLowerCase();
  
    // Фильтрация данных на основе поискового запроса
    var results = data.filter(function(item) {
      return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
    });
  
    // Отображение результатов поиска
    displayResults(results);
  }
  
  // Функция для отображения результатов поиска
  function displayResults(results) {
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    if (results.length === 0) {
      searchResults.innerHTML = 'No results found.';
      return;
    }
  
    // Создание списка результатов
    var resultList = document.createElement('ul');
  
    // Добавление каждого результата в список
    results.forEach(function(result) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + result.title + ':</strong> ' + result.content;
      resultList.appendChild(listItem);
    });
  
    // Отображение списка результатов
    searchResults.appendChild(resultList);
  }
  
  // Обработчик события для срабатывания поиска при вводе
  document.getElementById('searchInput').addEventListener('input', search);
  
  let mask=document.querySelector('.mask');
  window.addEventListener('load',()=>{
    mask.classList.add('hide');
    setTimeout(()=>{
        mask.remove();
    },600);
  });
  