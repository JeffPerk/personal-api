var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./scripts/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(middleWare.addHeaders);



app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLastOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/skills', mainCtrl.getSkillz);
app.get('/skills/experience', mainCtrl.getSkillzExp);
app.get('/secrets/:username/:pin', middleWare.verifyId, mainCtrl.getSecret);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.postHobby);
app.post('/occupations', mainCtrl.postOccupation);
app.post('/skills', middleWare.generateId, mainCtrl.postSkillz);





var port = 8080;
app.listen(port, function() {
  console.log('listening to port', port);
});
