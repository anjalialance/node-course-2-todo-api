//var MongoClient = require('mongodb').MongoClient;

var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDoApp", (err,client) => {
	if (err){
		console.log("Unable to connect to the data server");
	}
	console.log("Connected to the mongo server");

	var db = client.db("ToDoApp");

	//deleteMany
	// db.collection('ToDos').deleteMany({text: 'I am happy'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('ToDos').deleteOne({text: 'Something to do'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// //deleteMany
	// db.collection('Users').deleteMany({location: 'Canada'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5bb4a2b4f9699315c46f827d")
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	client.close();
});