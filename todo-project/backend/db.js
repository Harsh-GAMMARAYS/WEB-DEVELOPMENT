const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin123:Harshit%402219@gamma.zhc9bkc.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}