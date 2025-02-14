// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roles: {
    type: [String], // Lista de roles, por ejemplo: ['admin', 'modulo1', 'user']
    default: [],
  },
});

module.exports = mongoose.model('User', userSchema);
