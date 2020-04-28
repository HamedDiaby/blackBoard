const mongoose = require('./bdd');

var messagesSchema = mongoose.Schema({
    title: String,
    content: String,
    dateExp: Date,
    read: Boolean,
    sender: String,
});

var tasksSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    owner: String,
    dateInsert: Date,
    dateDue: Date,
    dateCloture: Date
});

var usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,
    messages: [ messagesSchema ],
    tasks: [ tasksSchema ],
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;