const express = require('express')
const app = express()
var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000 );

app.get('/', (req, res) => {
  res.send("<li>This is working!</li>")
})
app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
