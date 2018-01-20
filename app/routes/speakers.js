const express = require('express');
var router = express.Router();


router.get('/speakers', (req, res) => {
  var info = '';
  var dataFile = req.app.get('appData')
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
    `;
  })
  res.send(`
      <h1>Meetups</h1>
      ${info}
    `)
})


router.get('/speakers/:speakerid', (req, res) => {
 var dataFile = req.app.get('appData')
 var speaker = dataFile.speakers[req.params.speakerid];
 res.send(`
    <h1>Your Speaker Requested Is:</h1>
    <h2>${speaker.title}</h2>
    <h3>${speaker.name}</h3>
    <p>${speaker.summary}</p>
  `)
})
