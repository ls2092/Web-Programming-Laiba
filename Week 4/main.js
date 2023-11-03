var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/ls2092/Web-Programming-Laiba/blob/main/Week%204/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
