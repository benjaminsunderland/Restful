const express = require('express')
const app = express()
var reload = require('reload');
var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});

reload(app, server);
