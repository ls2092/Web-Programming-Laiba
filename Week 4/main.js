var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://github.com/ls2092/Web-Programming-Laiba/blob/main/Week%204/cities1.json');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
ourRequest.send();


var myCity = [
    {
        "name" : "Dubai",
        "country" : "UAE",
        "place" : "Dubai Mall"
    },

    {
        "name" : "Milan",
        "country" : "Italy",
        "place" : "Domo di Milan"
    },

    {
        "name" : "Abu Dhabi",
        "country" : "UAE",
        "place" : "Marina Mall"
    }
]

console.log(myCity[1].country);

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://your-github-username.github.io/your-repositoryname/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();
})

var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://your-github-username.github.io/your-repositoryname/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
renderHTML(ourData);
};
ourRequest.send();
});
function renderHTML(data){
var htmlString = "this is a test";
cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}