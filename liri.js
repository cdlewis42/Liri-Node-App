require("dotenv").config();
var keys = require("./keys.js")
var axios = require("axios")
var moment = require("moment")
var fs = require("fs")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify)
var nameOf = process.argv[3]
var command = process.argv[2]

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


var showSongs = function (songName) {
    spotify.search({
            type: 'track',
            query: songName,
            limit: 1
        })
        .then(function (response) {
            console.log("Artist: " + response.tracks.items[0].artists[0].name)
            console.log("Song Title: " + response.tracks.items[0].name)
            console.log("Preview: " + response.tracks.items[0].external_urls.spotify)
            console.log("Album: " + response.tracks.items[0].album.name)
        })
}



var showRandom = function () {
fs.readFile("random.txt","utf8", function(error, data){
    console.log(data)

    var dataArray = data.split(",")

    commands(dataArray[0],dataArray[1])
    

})
}

var commands = function(arg1, arg2){
if (arg1 === "concert-this") {
    showBands(arg2)
} else if (arg1 === "spotify-this-song") {
    if (arg2 === "") {
        showSongs("Africa")
    } else {
        showSongs(arg2)
    }
} else if (arg1 === "movie-this") {
    if (arg2 === "") {
        showMovies("Mr. Nobody")
    } else {
        showMovies(arg2)
    }
} else if (arg1 === "do-what-it-says") {
    showRandom()
}
}


commands(command,nameOf)