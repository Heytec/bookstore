var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/books');






//connect to Mongoose

mongoose.connect('mongodb://localhost:27017/bookstore');
var db = mongoose.connection;


//homepage rules api
app.get('/', function (req, res) {
    res.send('Please use /api/books or ai/genre');
});

// Genres get api

app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {

        if (err) {
            throw err;

        }
        res.json(genres);

    });
});

// genre books api
app.get('/api/books', function (req, res) {
    Book.getbooks(function (err, books) {

        if (err) {
            throw err;

        }
        res.json(books);

    });
});

//onebook
app.get('/api/books/:id', function (req, res) {
    Book.getBooksById( req.params.id, function (err, book) {

        if (err) {
            throw err;

        }
        res.json(book);

    });
});

//addgenre
app.post('/api/genres', function (req, res) {
    var genre =req.body;
    Genre.addGenres(genre,function (err, genre) {

        if (err) {
            throw err;

        }
        res.json(genre);

    });
});


//addbook
app.post('/api/books', function (req, res) {
    var book =req.body;
    Book.addBooks(book,function (err, book) {

        if (err) {
            throw err;

        }
        res.json(book);

    });
});

//update genre
app.put('/api/genres/:id', function (req, res) {
    var id= req.params.id;
    var genre =req.body;
    Genre.updateGenres(id,genre,{},function (err, genre) {

        if (err) {
            throw err;

        }
        res.json(genre);

    });
});

//update boook 
app.put('/api/books/:id', function (req, res) {
    var id= req.params.id;
    var book =req.body;
    Book.updateBook(id,book,{},function (err, book) {

        if (err) {
            throw err;

        }
        res.json(book);

    });
});

app.delete('/api/genres/:id', function (req, res) {
    var id= req.params.id;
    var book =req.body;
    Genre.deleteGenres(id,function (err, genre) {

        if (err) {
            throw err;

        }
        res.json(genre);

    });
});



app.delete('/api/books/:id', function (req, res) {
    var id= req.params.id;
    var book =req.body;
    Genre.deleteBook(id,function (err, book) {

        if (err) {
            throw err;

        }
        res.json(book);

    });
});






app.listen(3000);
console.log('Example app listening on port 3000!');

