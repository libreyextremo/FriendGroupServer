const mongoose = require('mongoose');

// use ES6 promises library instead of mongoose promise library
mongoose.Promise = global.Promise;

// It should connect to the database before tests run
before(function(done){

  // Connect to mongodb
  mongoose.connect('mongodb://localhost/friendgroup');
  // launch when connection is opened
  console.log('Launch connection.js');
  mongoose.connection.once('open', function(){
    console.log('MongoDB connection has been made succesfully.');
    done();
  }).on('error', function(error){
    console.log('MongoDB connection error:', error);
  });

});
