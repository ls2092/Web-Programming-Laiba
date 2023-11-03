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