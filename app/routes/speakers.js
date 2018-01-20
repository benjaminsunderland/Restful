const express = require('express');
var router = express.Router();


router.get('/speakers', (req, res) => {
  var info = '';
  var dataFile = req.app.get('appData')
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name}</h2>
       <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker"
      <p>${item.summary}</p>
    </li>
    `;
  })
  res.send(`
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>Welcome</h1>
      <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
      <script src="/reload/reload.js"></script>
      <h1>Meetups</h1>
      ${info}
    `)
})


router.get('/speakers/:speakerid', (req, res) => {
 var dataFile = req.app.get('appData')
 var speaker = dataFile.speakers[req.params.speakerid];
 res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Your Speaker Requested Is:</h1>
    <h2>${speaker.title}</h2>
    <h3>${speaker.name}</h3>
    <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker"
    <p>${speaker.summary}</p>
    <script src="/reload/reload.js"></script>
  `)
})

module.exports = router;
