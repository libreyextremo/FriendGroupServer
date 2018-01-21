const express = require('express');
const router = express.Router();
const FriendModel = require('../models/friend_model');

// set reply to "localhost:4000/api/friend" get request
// optional param id: friend id field
// get friends list from the db
router.get('/friend', function(req, res, next){
  console.log('GET api/friend request');
  console.log('id = ' + req.query.id);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  if (req.query.id != null) {
    console.log('Id defined');
    let pid = req.query.id;
    FriendModel.find({id: pid}).then(function(listFriends){
          res.send(listFriends);
      }).catch(next);
  } else {
    console.log('Id undefined');
    FriendModel.find({}).then(function(listFriends){
          res.send(listFriends);
      }).catch(next);
  }
});

// add a new friend to the db
router.post('/friend', function(req, res, next){
  console.log('POST api/friend request');

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  FriendModel.create(req.body).then(function(newFriend){
    res.send(newFriend);
  }).catch(next);

});

// update a friend in the db
router.put('/friend/:id', function(req, res, next){
  console.log('PUT api/friend request');
  console.log('PUT /clients request');
  console.log('params: id = ' + req.params.id);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  FriendModel.findByIdAndUpdate({_id: req.params.id},req.body).then(function(updatedFriend){
    FriendModel.findOne({_id: req.params.id}).then(function(updatedFriend){
      res.send(updatedFriend);
    }).catch(next);
  }).catch(next);

});

// delete a friend in the db
router.delete('/friend/:id', function(req, res, next){
  console.log('DELETE api/friend request');
  console.log('params: id = ' + req.params.id);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  FriendModel.findByIdAndRemove({_id: req.params.id}).then(function(deletedFriend){
    res.send(deletedFriend);
  }).catch(next);

});

module.exports = router;
