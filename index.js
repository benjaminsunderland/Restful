const express = require('express')
const app = express()
var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000 );

app.get('/', (req, res) => {
  var info = '';
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
app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
