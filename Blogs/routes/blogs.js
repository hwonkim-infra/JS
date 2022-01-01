//blog routes

const express = require('express');
const Blog = require('./../models/Blog');
const router = express.Router();
const multer = require('multer');

//define storage for the images

const storage = multer.diskStorage({
    //destination for files
    destination: function(req, file, callback) {
        callback(null, './public/uploads/images');
    },

    //add back the extension
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname);
    },
});

//upload parameters for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

router.get('/new', (req, res) => {
    res.render('new');
});

//view route
router.get('/:slug', async(req, res) => {
    let blog = await Blog.findOne({ slug: req.params.slug });

    if (blog) {
        res.render('show', { blog: blog });
    } else {
        res.redirect('/');
    }
});

//route that handles new post
router.post('/', upload.single('image'), async(req, res) => {
    console.log(req.file);
    // console.log(req.body);
    let blog = new Blog({
        title: req.body.title,
        // author: req.body.author,
        description: req.body.description,
        // img: req.file.filename,
    });

    try {
        blog = await blog.save();

        res.redirect(`blogs/${blog.slug}`);
    } catch (error) {
        console.log(error);
    }
});

// route that handles edit view
router.get('/edit/:id', async(req, res) => {
    let blog = await Blog.findById(req.params.id);
    res.render('edit', { blog: blog });
});

//route to handle updates
router.put('/:id', async(req, res) => {
    req.blog = await Blog.findById(req.params.id);
    let blog = req.blog;
    blog.title = req.body.title;
    // blog.author = req.body.author;
    blog.description = req.body.description;

    try {
        blog = await blog.save();
        //redirect to the view route
        res.redirect(`/blogs/${blog.slug}`);
    } catch (error) {
        console.log(error);
        res.redirect(`/seblogs/edit/${blog.id}`, { blog: blog });
    }
});

///route to handle delete
router.delete('/:id', async(req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;