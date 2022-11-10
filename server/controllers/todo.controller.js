const Todo = require("../models/Todo.model")

exports.add = async (req, res) => {
    console.log(req.body)
    Todo.add(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.send(err))
}

exports.all = async (req, res) => {
    Todo.all(req.query)
        .then((data) => res.send(data))
        .catch((err) => res.send(err))
}

exports.update = async (req, res) => {
    Todo.update(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.send(err))
}

exports.remove = async (req, res) => {
    Todo.remove(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.send(err))
}