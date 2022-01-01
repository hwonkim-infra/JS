const express = require('express');

//bring in mongoose
const mongoose = require('mongoose');

//bring in method override
const methodOverride = require('method-override');

const blogRouter = require('./routes/blogs');
const Blog = require('./models/Blog');
const app = express();

//connect to mongoose
mongoose.connect('mongodb+srv://hwKimDB:H5VRAUk2Zd2BYegH@cluster0.jbnnb.mongodb.net/Blog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//set template engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(methodOverride('_method'));
//route for the index
app.get('/', async(req, res) => {
    let blogs = await Blog.find().sort({
        timeCreated: 'desc'
    });

    res.render('index', {
        blogs: blogs
    });
});

app.use(express.static('public'));
app.use('/blogs', blogRouter);

//listen port
app.listen(5000);