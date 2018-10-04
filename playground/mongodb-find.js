//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err,client)=>{
	if(err){
		console.log("Unable to connect to the data server");
	}
	console.log("Connected to the mongo server");

	var db = client.db('ToDoApp');

	// db.collection('ToDos').find({
	// 	_id: new ObjectID('5bb4af5e15930baa440e1ff9')
	// }).toArray().then((docs) => {
	// 	console.log('ToDos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// },(err) => {
	// 	console.log('Unable to fetch the details');
	// });

	// client.close();

	// db.collection('ToDos').find().count().then((count) =>{
	// 	console.log(`ToDos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch the todos');
	// });

		db.collection('Users').find({name: 'Ankit'}).toArray().then((docs) => {
			console.log(JSON.stringify(docs,undefined,2));
		});

	client.close();

});