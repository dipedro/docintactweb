/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/countries', require('./api/countries'));
  app.use('/api/docimages', require('./api/docimage'));
  app.use('/api/tokens', require('./api/token'));
  app.use('/api/mobilelinks', require('./api/mobilelink'));
  app.use('/api/favorites', require('./api/favorite'));
  app.use('/api/auditlogs', require('./api/auditlog'));
  app.use('/api/documentlogs/', require('./api/documentlogs'));
  app.use('/api/stamps', require('./api/stamp'));
  app.use('/api/photos', require('./api/photo'));
  app.use('/api/onlineusers', require('./api/onlineuser'));
  app.use('/api/signatures', require('./api/signature'));

  app.use('/api/auditlog', require('./api/auditlog'));
  app.use('/api/versions', require('./api/version'));
  app.use('/api/comments', require('./api/comment'));
  app.use('/api/chats', require('./api/chat'));

  app.use('/api/fieldvalues', require('./api/fieldvalue'));
  app.use('/api/fieldoption', require('./api/fieldoption'));
  app.use('/api/notifications', require('./api/notification'));
  app.use('/api/linkss', require('./api/links'));
  app.use('/api/departments', require('./api/department'));
  app.use('/otp', require('./api/otp'));
  app.use('/api/folders', require('./api/folder'));
  app.use('/api/documents', require('./api/document'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/sharingpeoples', require('./api/sharingpeople'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
};
