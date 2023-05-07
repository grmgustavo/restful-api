const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false // You should be aware of the outcome after set to false
}
)

//Export model
module.exports = mongoose.model('User', UserSchema)