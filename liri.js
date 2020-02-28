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
            for (var i = 0; i < 4; i++) {
                console.log("Date: " + moment(data[i].datetime).format("MM/DD/YYYY"))
                console.log("Venue: " + data[i].venue.name)
                console.log("City: " + data[i].venue.city)
                console.log("Country: " + data[i].venue.country)
                console.log("")
            }

        }
    )

}


var showMovies = function (movieName) {
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy" 
    axios.get(queryURL).then(
        function (results) {
            data = results.data
                console.log("Title: " + data.Title)
                console.log("Year released: " + data.Year)
                console.log("IMDB rating: " + data.imdbRating)
                console.log("Language: " + data.Language)
                console.log("Plot: " + data.Plot)
                console.log("Actors: " + data.Actors)

            
        }
    )

}


if (process.argv[2] === "concert-this") {
    showBands(nameOf)
} else if (process.argv[2] === "spotify-this-song") {
    showSongs(nameOf)
} else if (process.argv[2] === "movie-this") {
    if(nameOf === " "){
        showMovies("Mr. Nobody")
    }
    else{
    showMovies(nameOf)
    }
} else if (process.argv[2] === "do-what-it-says") {
    showRandom(nameOf)
}