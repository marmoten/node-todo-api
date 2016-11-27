// outside dependencies
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

//local dependencies
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// start express
var app = express();

//middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

// Get /todos/1234324
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		} else {
			return res.send({todo});
		}
		console.log('Todo By ID', todo);
	}, (e) => {
		res.status(400).send();
	});
});


app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};






