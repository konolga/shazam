
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
let arr = [
              { cover:'https://images.shazam.com/coverart/t454328373-i1447869530_s400.jpg',title: "Don't Call Me Up",subtitle: 'Mabel',link: 'https://www.shazam.com/track/454328373/dont-call-me-up' },
               {cover: 'https://images.shazam.com/coverart/t445665371-i1437948987_s400.jpg', title: 'Bad Liar', subtitle: 'Imagine Dragons', link: 'https://www.shazam.com/track/445665371/bad-liar' },
               {cover: 'https://images.shazam.com/coverart/t455304291-i1447498494_s400.jpg', title: 'Giant', subtitle: "Calvin Harris & Rag'n'Bone Man", link: 'https://www.shazam.com/track/455304291/giant' },
               {cover: 'https://images.shazam.com/coverart/t455797503-i1449166123_s400.jpg', title: '7 Rings', subtitle: 'Ariana Grande', link: 'https://www.shazam.com/track/455797503/7-rings' }];
  request( options, (error, response, body) =>{
    if (!error && response.statusCode == 200)
      {
        //fs.writeFile('./src/backend/output.json', body,()=>{});
        JSON.parse(body)["chart"].forEach(el=>
            {
              let title = el["heading"]["title"];
              let subtitle = el["heading"]["subtitle"];
              let cover = el["images"]["default"];
              let link = el["share"]["href"];
              let song = {"cover": cover,"title": title,"subtitle": subtitle, "link": link}
              arr.push(song)
            })
          }
        res.send(arr)
      })
}


