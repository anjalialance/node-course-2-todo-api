//var MongoClient = require('mongodb').MongoClient;

var {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDoApp", (err,client) => {
	if(err){
		console.log("Unable connect to the server");
	}

	console.log("Connected to the mongodb server");

	var db = client.db("ToDoApp");

 	db.collection('Users').findOneAndUpdate({
 		_id: new ObjectId("5bb4a21b63d6210ce4c65cd4")
 	}, {
 		$set: {
 			name: 'Johnny'
 		},
 			$inc: {
 				age: 1
 			}
 		}, 
 		{
 			returnOriginal: false
 		}).then((result) => {
 			console.log(result);
 		});

	// db.collection('ToDos').findOneAndUpdate({
	// 	_id: new ObjectId("5bb5cccae73c25d5bdbd9c57")
	// }, { $set: {
	// 	completed: false
	// 	}
	// }	,{
	// 	returnOriginal: true
	// }).then((result) => {
	// 	console.log(result);
	// });

	client.close();
});