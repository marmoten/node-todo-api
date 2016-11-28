const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '583b698836668016014754f011';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid')
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID Not Found');
// 	}
// 	console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

// query ID from users collection

//User.findById

var id = '583b478b556b89e0fa51902a';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('ID Not Found');
	}
	console.log('User By ID', user);
}).catch((e) => console.log(e));









