const User = require('../models/usersModel')

const findAll = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const create = async (req, res) => {
    const newUser = new User(req.body)

    if (!newUser.name || !newUser.age || !newUser.email || !newUser.password) {
        return res.status(400).json({ message: 'Please fill out all required fields.' })
    }

    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const update = async (req, res) => {
    const { id } = req.params
    const { name, age, email, password } = req.body

    if (!name || !age || !email || !password) {
        return res.status(400).json({ message: 'Please fill out all required fields.' })
    }

    const user = await User.findById(req.params.id)

    if (!user) {
        return res.status(404).json({ message: 'Could not find ant user with this id.' })
    }

    try {
        await User.findOneAndUpdate({ _id: id }, req.body)
        res.status(204).json({})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const remove = async (req, res) => {
    const { id } = req.params

    try {
        await User.findOneAndDelete({ _id: id })
        res.status(200).json({ message: 'User deleted successfully.' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}