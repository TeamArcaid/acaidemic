var database = require('../../config/db.config').database

var User = database.define('users', {
    id: { type: 'SERIAL PRIMARY KEY', primaryKey: true},
    first_Name: { type: 'TEXT'},
    first_Name: { type: 'TEXT'}
})

module.exports.User = User