$(document).ready(function () {
  var audio = $("#backgroundAudio")[0];
  var playPauseButton = $("#playPauseButton");

  playPauseButton.on("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseButton.html("Pause");
    } else {
      audio.pause();
      playPauseButton.html("Play");
    }
  });

  // Получение ссылок на поле ввода и контейнер результатов
  var searchInput = $("#searchInput");
  var searchResults = $("#searchResults");

  // Обработчик события для срабатывания поиска при вводе
  searchInput.on("input", function () {
    // Получение значения из поискового поля
    var query = searchInput.val().toLowerCase();

    // Фильтрация данных на основе поискового запроса
    var results = data.filter(function (item) {
      return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
    });

    // Отображение результатов поиска
    displayResults(results);
  });

  // Добавление обработчика события для очистки результатов при удалении ключевых слов
  searchInput.on("keyup", function (event) {
    if (event.key === "Backspace" && searchInput.val() === "") {
      // Если пользователь удалил все символы, очистите результаты
      searchResults.html("");
    }
  });

  // Создаем пустой массив для хранения данных
  var data = [];

  // Функция для извлечения текста из элемента
  function extractText(element) {
    if (element) {
      return element.text().trim();
    }
    return "";
  }

  // Получаем заголовок страницы
  var pageTitle = extractText($("head title"));
  data.push({ title: "Page Title", content: pageTitle });

  // Получаем текст из всех параграфов
  var paragraphs = $("p");
  paragraphs.each(function (index, paragraph) {
    var paragraphText = extractText($(paragraph));
    data.push({ title: "Paragraph " + (index + 1), content: paragraphText });
  });

  // Получаем текст из атрибутов alt у изображений
  var images = $("img");
  images.each(function (index, image) {
    var altText = $(image).attr("alt");
    data.push({ title: "Image " + (index + 1), content: altText });
  });

  // Выводим данные в консоль (можете изменить на сохранение в переменную или отправку на сервер)
  console.log(data);

  // Функция для выполнения поиска
  function search() {
    // Получение значения из поискового поля
    var query = searchInput.val().toLowerCase();

    // Фильтрация данных на основе поискового запроса
    var results = data.filter(function (item) {
      return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
    });

    // Отображение результатов поиска
    displayResults(results);
  }

  // Функция для отображения результатов поиска
  function displayResults(results) {
    searchResults.html("");

    if (results.length === 0) {
      searchResults.html("No results found.");
      return;
    }

    // Создание списка результатов
    var resultList = $("<ul>");

    // Добавление каждого результата в список
    results.forEach(function (result) {
      var listItem = $("<li>").html('<strong>' + result.title + ':</strong> ' + result.content);
      resultList.append(listItem);
    });

    // Отображение списка результатов
    searchResults.append(resultList);
  }

  // Обработчик события для срабатывания поиска при вводе
  searchInput.on("input", search);

  let mask = $(".mask");
  $(window).on("load", function () {
    mask.addClass("hide");
    setTimeout(function () {
      mask.remove();
    }, 600);
  });

  var $videoSrc;

  // Store the video source when the button is clicked
  $(".btn-dark").on("click", function () {
    $videoSrc = $(this).data("src");
  });

  // Set the video source when the modal is shown
  $("#staticBackdrop").on("shown.bs.modal", function () {
    $("#youtubeVideo").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  });

  // Remove the video source when the modal is hidden
  $("#staticBackdrop").on("hidden.bs.modal", function () {
    $("#youtubeVideo").attr("src", "");
  });
});
