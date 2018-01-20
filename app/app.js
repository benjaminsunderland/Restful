const express = require('express')
const app = express()
var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});
