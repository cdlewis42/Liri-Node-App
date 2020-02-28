require("dotenv").config();
var keys = require("./keys.js")
var axios = require("axios")
var moment = require("moment")
var fs = require("fs")
//var spotify = new Spotify(keys.spotify)
var nameOf = process.argv[3]
showBands = function (bandName) {
    var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp"
    axios.get(queryURL).then(
        function (results) {
            var data = results.data
            for(var i=0; i<4; i++){
            console.log(data[i].datetime)
            console.log(data[i].venue.name)
            console.log(data[i].venue.city)
            console.log(data[i].venue.country)
            console.log("")
            }
            
        }
    )

}
var showMovies = function(){

}

if (process.argv[2] === "concert-this") {
    showBands(nameOf)
} else if (process.argv[2] === "spotify-this-song") {
    showSongs()
} else if (process.argv[2] === "movie-this") {
    showMovies()
} else if (process.argv[2] === "do-what-it-says") {
    showRandom()
}