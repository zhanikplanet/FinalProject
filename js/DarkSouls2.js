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


  var searchInput = $("#searchInput");
  var searchResults = $("#searchResults");

  
  searchInput.on("input", function () {
   
    var query = searchInput.val().toLowerCase();

    
    var results = data.filter(function (item) {
      return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
    });

    
    displayResults(results);
  });

  
  searchInput.on("keyup", function (event) {
    if (event.key === "Backspace" && searchInput.val() === "") {
      
      searchResults.html("");
    }
  });

 
  var data = [];

  
  function extractText(element) {
    if (element) {
      return element.text().trim();
    }
    return "";
  }

 
  var pageTitle = extractText($("head title"));
  data.push({ title: "Page Title", content: pageTitle });

 
  var paragraphs = $("p");
  paragraphs.each(function (index, paragraph) {
    var paragraphText = extractText($(paragraph));
    data.push({ title: "Paragraph " + (index + 1), content: paragraphText });
  });

  
  var images = $("img");
  images.each(function (index, image) {
    var altText = $(image).attr("alt");
    data.push({ title: "Image " + (index + 1), content: altText });
  });

  
  console.log(data);


  function search() {
   
    var query = searchInput.val().toLowerCase();

  
    var results = data.filter(function (item) {
      return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
    });

   
    displayResults(results);
  }

  function displayResults(results) {
    searchResults.html("");

    if (results.length === 0) {
      searchResults.html("No results found.");
      return;
    }

 
    var resultList = $("<ul>");

  
    results.forEach(function (result) {
      var listItem = $("<li>").html('<strong>' + result.title + ':</strong> ' + result.content);
      resultList.append(listItem);
    });

    
    searchResults.append(resultList);
  }

  
  searchInput.on("input", search);

  let mask = $(".mask");
  $(window).on("load", function () {
    mask.addClass("hide");
    setTimeout(function () {
      mask.remove();
    }, 600);
  });

  var $videoSrc;


  $(".btn-dark").on("click", function () {
    $videoSrc = $(this).data("src");
  });

 
  $("#staticBackdrop").on("shown.bs.modal", function () {
    $("#youtubeVideo").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  });

  
  $("#staticBackdrop").on("hidden.bs.modal", function () {
    $("#youtubeVideo").attr("src", "");
  });
});
