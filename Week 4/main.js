var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://ls2092.github.io/Web-Programming-Laiba/Week%204/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData);
};
ourRequest.send();
