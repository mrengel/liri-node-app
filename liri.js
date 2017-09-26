var keyList = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var client = new Twitter(keyList.twitterKeys);
var clientSpotify = new Spotify(keyList.spotifyKeys);
var fs = require('fs');


var action = process.argv[2];
var nodeArg = process.argv;

//capturing title of song or movie
var title = "";

for (var i = 3; i < nodeArgs.length; i++) {
	title = title + " " + nodeArg[i];
}


switch (action) {
	case "my-tweets":
	tweets();
	break;

	case "spotify-this-song":
		if(x){
			spotify(title);
		}
		else{
			spotify("The Sign by Ace of Base");
		}
	break;

	

	case "movie-this":
	movie();
	break;

	case "do-what-it-says":
	random();
	break;
}

function tweets(){
	//Display Tweets
	var screenName = {screen_name: 'Confused Mystery'};
	client.get('statuses/user_timeline', screenName, function(error, tweets, response) {
	  if(!error){
	  	for(var i=0; i<tweets.length; i++){
	  		var date = tweets[i].created_at;
	  		console.log("ConfuzedMystery" + tweets[i].text + " Created: " + date.substring(0,19));
	  		console.log("-----------");

	  		//Add to the log file
	  		fs.appendFile('log.txt', "ConfuzedMystery" + tweets[i].text + " Created: " + date.substring(0,19));
	  		fs.appendFile('log.txt', "---------");
	  	}
	  }
	  else{
	  	console.log("error");
	  }
	});
}

function spotify(song){
	spotify.search({type:'track', query:'song'}, function(err, data){
		if (err){
			return console.log('Error occurred: ' + err);
		}
		console.log(data);
	});
}
