const express = require('express');
const app = express();
const port = 3000;
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// const User = require('./model/userModel');

//urlencoded is used when data is send form the form
app.use(express.urlencoded({ extended: true }));



//static file
app.use(express.static('public'));
// Home Page
app.get('/', (req, res) => {
    res.redirect('blogs');
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

//blog routes
app.use('/blogs', blogRoutes);

function startApp() {
    mongoose
        .connect(
            'mongodb+srv://ramlal:admin@cluster0.1zwlbec.mongodb.net/?retryWrites=true&w=majority',
            {}
        )
        .then(() => {
            console.log('DB Connected');
            app.listen(port, () => {
                console.log(`Server is running at http://localhost:${port}`);
            });
        })
        .catch((error) => {
            console.error('DB connection failed:', error);
        });
}

startApp();