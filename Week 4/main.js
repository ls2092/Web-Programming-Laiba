//var ourRequest = new XMLHttpRequest();
//ourRequest.open('GET', 'https://ls2092.github.io/Web-Programming-Laiba/Week%204/cities1.json');
//ourRequest.onload = function() {
//var ourData = JSON.parse(ourRequest.responseText);
//console.log(ourData);
//};
//ourRequest.send();


var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://ls2092.github.io/Web-Programming-Laiba/Week%204/cities1.json');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data){
    var htmlString = "this is a test";
    cityContainer.insertAdjacentElement('beforeend' , htmlString)
}



