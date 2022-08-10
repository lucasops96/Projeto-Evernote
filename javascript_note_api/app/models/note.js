const mogoose = require('mongoose')

let noteSchema = new mogoose.Schema({
    title: String,
    body: String,
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now},
    author:{
        type: mogoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Note', noteSchema)