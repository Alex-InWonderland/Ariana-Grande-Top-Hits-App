/* This app displays a list of Ariana Grande's top 5 hits on Spotify. This app uses the Spotify API. */

let formButton = document.getElementById("form-button");
let tracks = new Set();
let tracksArray;
let songDataSpans; /* Used to input the song data into */

formButton.addEventListener("click", getSongData);



function getSongData() {

    fetch("https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR/top-tracks?market=US&access_token=")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);

            for (i = 0; i < 5; i++) {
                tracks.add(response.tracks[i].name);/* The tracks variable is declared at the beginning of this document.*/
            }

            console.log(tracks);
            formatSongData();
        })
        .catch(err => {
            console.log(err);
        });

    /*formatSongData();*/
}

function formatSongData() {

    tracksArray = [...tracks];/* Needed to clone the tracks set, and turn it into an array. This is because individual
    set element's can't be accessed, but individual array element's can. (Needed to access the elements in the list to 
    get the songs of the set). The tracksArray variable is declared at the beginning of this document. */
    songDataSpans = document.getElementsByClassName("song-data"); /* The songDataSpans variable is declared at the beginning of this document. */

    for (i = 0; i < 5; i++) {
        songDataSpans[i].innerHTML = tracksArray[i];
    }

    console.log(songDataSpans);

    document.getElementById("data-div").className = "data-div-display";


}