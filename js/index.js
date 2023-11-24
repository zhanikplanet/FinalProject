
var searchInput = document.getElementById('searchInput');
var searchResults = document.getElementById('searchResults');


searchInput.addEventListener('input', function() {
 
  var query = searchInput.value.toLowerCase();

 
  var results = data.filter(function(item) {
    return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
  });

 
  displayResults(results);
});


searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Backspace' && searchInput.value === '') {

    searchResults.innerHTML = '';
  }
});


var data = [];


function extractText(element) {
  if (element) {
    return element.innerText.trim();
  }
  return '';
}


var pageTitle = extractText(document.querySelector('head title'));
data.push({ title: 'Page Title', content: pageTitle });


var paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(paragraph, index) {
  var paragraphText = extractText(paragraph);
  data.push({ title: 'Paragraph ' + (index + 1), content: paragraphText });
});


var images = document.querySelectorAll('img');
images.forEach(function(image, index) {
  var altText = image.alt;
  data.push({ title: 'Image ' + (index + 1), content: altText });
});


console.log(data);

  

  function search() {
    var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('searchResults');
  
   
    var query = searchInput.value.toLowerCase();
  
   
    var results = data.filter(function(item) {
      return item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
    });
  
    
    displayResults(results);
  }
  
  
  function displayResults(results) {
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    if (results.length === 0) {
      searchResults.innerHTML = 'No results found.';
      return;
    }
  

    var resultList = document.createElement('ul');
  
 
    results.forEach(function(result) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + result.title + ':</strong> ' + result.content;
      resultList.appendChild(listItem);
    });
  
   
    searchResults.appendChild(resultList);
  }
  
  
  document.getElementById('searchInput').addEventListener('input', search);
  
  let mask=document.querySelector('.mask');
  window.addEventListener('load',()=>{
    mask.classList.add('hide');
    setTimeout(()=>{
        mask.remove();
    },600);
  });
  