'use strict';

var _ = require('lodash');
var Token = require('./token.model');
var User = require('../user/user.model');
var auth = require('../../auth/auth.service');



exports.auth = function(req, res){
console.log(req.body)
Token.findOne({uid: req.body.uid, deviceuuid: req.body.deviceuuid}, function(error, token){
console.log(token,"sekhar")
if (error) return res.status(401).json(error);
   	else if (!token) return res.status(404).json({message: 'Something went wrong, please try again.'});
else{
console.log("$$$$$$$$$$$$$$$$$$$$$$44222")
User.findById(req.body.uid, function (err, user) {
console.log(err)
console.log("0000000000000000", user)
if (error) return res.status(401).json(error);
else{
var token = auth.signToken(user._id, user.role);

res.json({token: token,user:user});
}
});

}

});
}




// Get list of tokens
exports.index = function(req, res) {
  Token.find(function (err, tokens) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(tokens);
  });
};

// Get a single token
exports.show = function(req, res) {
  Token.findById(req.params.id, function (err, token) {
    if(err) { return handleError(res, err); }
    if(!token) { return res.status(404).send('Not Found'); }
    return res.json(token);
  });
};

// Creates a new token in the DB.
exports.create = function(req, res) {
console.log("11111111111111111111111111111111111111111", req.body)
  req.body.uid = req.user._id;
  Token.findOne({deviceuuid: req.body.deviceuuid }, function (err, token) {
    if(!token){
Token.create(req.body, function(err, token) {
   if(err) { return handleError(res, err); }
   return res.status(201).json(token);
});
     }else{
var data = {uid: req.body.uid }
var updated = _.merge(token, req.body);
   updated.save(function (err) {
     if (err) { return handleError(res, err); }
     return res.status(200).json(token);
   });
}
   });

};

// Updates an existing token in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Token.findById(req.params.id, function (err, token) {
    if (err) { return handleError(res, err); }
    if(!token) { return res.status(404).send('Not Found'); }
    var updated = _.merge(token, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(token);
    });
  });
};


exports.fingerprintupdate = function(req, res) {
Token.findOne({deviceuuid: req.body.deviceuuid }, function (err, token) {
var data = {uid: req.body.uid }
var updated = _.merge(token, req.body);
updated.save(function (err) {
if (err) { return handleError(res, err); }
return res.status(200).json(token);
});

});
};

// Deletes a token from the DB.
exports.destroy = function(req, res) {
  Token.findById(req.params.id, function (err, token) {
    if(err) { return handleError(res, err); }
    if(!token) { return res.status(404).send('Not Found'); }
    token.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
