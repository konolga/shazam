const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();
const url = 'https://www.shazam.com/charts/top-200/world'
//Scraping start
exports.songsList = (req, res) => {

	request(url, function (error, response, html) {
	  	if (!error && response.statusCode == 200) {
	    	let $ = cheerio.load(html);
         let parsedResults = [];

	    	$('.details').each(function(i, element){
          let title = [...document.querySelectorAll('.title a')].map((title)=>title.innerHTML)[i]
          let artist =[...document.querySelectorAll('.artist a')].map((artist)=>artist.innerHTML)[i]
          let song = {
                    "title":title,
                    "artist": artist
	      		};

	      		parsedResults.push(song);
	    	});
	    	console.log('title', title);
	  	}

	  	fs.writeFile('.backend/output.json', JSON.stringify(parsedResults, null, 4), function(err){
	    	console.log('Sraping data successfully written! - Check your project public/output.json file');
		});
	  	res.send('Scraping Done...');
	});
};
