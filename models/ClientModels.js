const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        },
        dateCreated: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
)

const ClientModel = mongoose.model('clients', ClientSchema);

module.exports = ClientModel;