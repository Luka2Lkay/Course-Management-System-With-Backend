require('dotenv').config()

const connectionStr = {
    db: process.env.CONNECTION_STRING
}

module.exports = {connectionStr}