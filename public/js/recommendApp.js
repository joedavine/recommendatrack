// Add a new track in the admin panel

var addTrack = function(){
var trackInfo = function (name, youtubeURL, genre) {
    name = document.getElementById("trackNameEntry").value;
    youtubeURL = document.getElementById("trackURLEntry").value;
    genre = document.getElementById("trackGenreEntry").value;
};
console.log("Track: " + trackInfo.name + " Youtube URL: " + trackInfo.youtubeURL + " Genre: " + trackInfo.genre);
};
    

var kittySchema = mongoose.Schema({
    name: String
})
var Kitten = mongoose.model('Kitten', kittySchema)