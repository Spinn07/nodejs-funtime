var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var TaskCtrl = require('./server/server');
var tasks = [];

app.get('/api/tasks', TaskCtrl.getTasks);
app.post('/api/tasks/create', TaskCtrl.postTask);
app.put('/api/tasks/update/:id', TaskCtrl.updateTask);
app.delete('/api/tasks/delete/:id', TaskCtrl.deleteTask);

app.listen(3000, function() {
    console.log('Listening on port 3000');
});