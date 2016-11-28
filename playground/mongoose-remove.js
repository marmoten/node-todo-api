const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '583b698836668016014754f0'}).then((todo) => {
	console.log(todo);
});


Todo.findByIdAndRemove('583b698836668016014754f0').then((todo) => {
	console.log(todo);
});




