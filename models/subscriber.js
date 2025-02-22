const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscriber:{
        type: String,
        required: false
    },
    subscribeDate:{
        type: String,
        required: true,
        default: Date.now
    }, 
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
