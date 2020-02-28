require("dotenv").config();
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify)

if (process.argv[2] === "concert-this"){
    showBands()
}
else if (process.argv[2] === "spotify-this-song"){
    showSongs()
}
else if (process.argv[2] === "movie-this"){
    showMovies()
}
else if (process.argv[2] === "do-what-it-says"){
    showRandom()
}