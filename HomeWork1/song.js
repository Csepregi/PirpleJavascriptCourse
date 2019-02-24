/* 
Keep Up With ES6
First Assignment
Write your favourite song
*/

var artist = "Kavinsky"
var cooperateArtist = "Lovefoxxx"
var genre = "Synthwave"
var published = 2011
var Album = "Drive"
var good = true
var durationInSeconds = 258


//Object
var song = {
    artist : "Kavinsky",
    cooperateArtist : "Lovefoxxx",
    genre : "Synthwave",
    published : 2011,
    Album : "Drive",
    good : true,
    durationInSeconds : 258,
}


//Array
var songCharacteristic = [];
songCharacteristic.push("Kavinsky", "Lovefoxxx", 2011)

console.log(song.Album);
console.log("Good? " + song.good);
console.log(artist);
console.log(cooperateArtist);
console.log(good);
console.log(songCharacteristic[songCharacteristic.length -1]);
console.log(songCharacteristic.pop())