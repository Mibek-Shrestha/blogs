// app.js

const express = require('express');
const app = express();
const port = 3000;
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');


mongoose.connect("mongodb+srv://mibek:<mibek12345>@cluster0.u8rrqvz.mongodb.net/blogs-tuts?retryWrites=true&w=majority")
const User = require('./model/userModel');
//static file
app.use(express.static('public'));
// Home Page
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Coders', snippet: 'loren is a ...' },
        { title: 'Story of student', snippet: 'loren is a....' },
        { title: 'Something is cooking', snippet: 'loren is ....' }
    ]
    res.render('home', { title: 'Blog Home', blogs });
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Add Blogs Page
app.get('/addblogs', (req, res) => {
    res.render('addblogs', { title: 'Add Blogs' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
