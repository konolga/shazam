
const fs = require('fs');
const request = require('request');


  const url = 'http://fullstack-test-server.herokuapp.com/api/songs'
  let options = {
    method: 'GET',
    json: false,
    url: url,
    headers: {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU'
    }
  };


exports.songsList = (req, res) => {
  request( options, (error, response, body) =>{
    if (!error && response.statusCode == 200)
      {
       // fs.writeFile('./src/backend/output.json', body,()=>{})
        }});
      res.send(
       [{"title": "'First Song'", "subtitle": "first autor" },
      { "title": "'Second Song'", "subtitle": "second autor" },
      { "title": "'Third Song'", "subtitle": "third autor" }]

      );
  }
