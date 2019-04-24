
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');


//Scraping from site HTML
/* exports.songsList = (req, res) => {
  let parsedResults = new Array();
  const url = 'https://www.shazam.com/charts/top-200/world'
	request(url, (error, response, html) =>{
	  	if (!error && response.statusCode == 200) {
        let $ = cheerio.load(html);
	      let title = $('.title').children('a').text();
        let song = {"title":title};
        parsedResults.push(song)
        }
	  	});

	  	fs.writeFile('./src/backend/output.json', JSON.stringify(parsedResults), function(err){
	    	console.log('Sraping data successfully written! - Check your project output.json file');
		});
	  	res.send(parsedResults);
	}; */



exports.songsList = (req, res) => {
  //const url = 'https://www.shazam.com/shazam/v2/en-US/IL/web/-/tracks/world-chart-world?pageSize=200&startFrom=0'

  const url = 'http://fullstack-test-server.herokuapp.com/api/songs'

  request( url, (error, response, body) =>{
    if (!error && response.statusCode == 200)
      {
        fs.writeFile('./src/backend/output.json', body, function(err){
	    	console.log('Sraping data successfully written! - Check your project output.json file');})
        }});
	  	res.send(this.title);
  }
