const express = require('express');
const router = express.Router();
const Blog = require('../model/blogs');

router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
})
//blog routes
router.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('home', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
});
router.get('/blogs/create', (req, res) => {
    res.render('addblogs', { title: 'Create a new Blog' })
})


router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        }).catch(err => {
            console.log(err);
        })
});

router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        }).catch(err => console.log(err))
});

module.exports = router;

