const mongoose = require('./bdd');

var usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,
    messages: Array,
    tasks: Array
    // messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'messages'}],
    // tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'tasks'}],
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;