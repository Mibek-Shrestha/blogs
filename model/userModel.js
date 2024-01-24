const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        blogTitle: String,
        blogSnippet: String,
        blogBody: String
    }
);
module.exports = mongoose.model('User', userSchema)