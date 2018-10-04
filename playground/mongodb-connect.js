//var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: "John", age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client) => {
	if(err){
		console.log('unable to connect to database server');
	}
	console.log('Connected to the mongo server');
	
	// var db = client.db('ToDoApp')

	// db.collection('Users').insertOne({
	// 	//_id: 123, 
	// 	name: 'John',
	// 	age: 25,
	// 	location: 'Canada'
	// },(err,result) =>{
	// 	if(err){
	// 		return console.log('Unable to do insert',err)
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	//console.log(JSON.stringify(result.ops,undefined,2));
	// });

	client.close();
});

// 	var db = client.db('ToDoApp')

// 	db.collection('ToDos').insertOne({
// 		text: 'Spmething to do',
// 		completed: false
// 	},(err,result) =>{
// 		if(err){
// 			return console.log('Unable to return insert',err)
// 		}
		
// 		console.log(JSON.stringify(result.ops,undefined,2));
// 	});

// 	client.close();
// });