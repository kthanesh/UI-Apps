const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongodburi = 'mongodb+srv://moviesuser:TestUserM0vies@cluster0.az7tu.mongodb.net/Movies?retryWrites=true&w=majority';

const app = express();

MongoClient.connect(mongodburi, {useUnifiedTopology: true}).then(client => {
    console.log('Connected to Database');

    const moviesDB = client.db('sample_mflix');
    const moviesList = moviesDB.collection('movies');

    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../movies-app/dist')));

    //expressVue.use(app, vueOptions).then(() => {
        app.get('/api/movies', (req,res) => {
            console.log('getting movies');
            moviesDB.collection('movies').find().sort({title: 1}).limit(100).toArray()
                .then(movies => {
                    //console.log(movies);
                    res.json(movies);
                });
        });

        app.post('/api/searchmoviename', (req,res) => {
            console.log("getting movie by name");
            const s = req.body.movieName;
            const regex = new RegExp(s, 'i')
            moviesDB.collection('movies').find({title: {$regex: regex}}).sort({title: 1}).limit(100).toArray()
                .then(movies => {
                    console.log(movies);
                    res.json(movies);
                });
        });

        app.post('/api/movieinfo', (req,res) => {
            console.log("getting movie details");
            const mid = req.body.movieId;
            var o_id = new ObjectId(mid);
            moviesDB.collection('movies').find({_id:o_id}).toArray()
                .then(movie => {
                    console.log(movie);
                    res.json(movie);
                });
        });

        app.post('/api/getmoviecomment', (req,res) => {
            console.log("getting movie comments");
            const mid = req.body.movieId;
            var o_id = new ObjectId(mid);
            moviesDB.collection('comments').find({movie_id:o_id}).toArray()
                .then(movie => {
                    console.log(movie);
                    res.json(movie);
                });
        });
  
        app.post('/api/submitmoviecomment', (req,res) => {
            console.log("submitting movie comments");
            const mid = req.body.movieId;
            var o_id = new ObjectId(mid);
            moviesDB.collection('comments').insertOne({movie_id:o_id, name:req.body.name, text:req.body.text})
                .then(commentId => {
                    console.log(commentId);
                    res.json(commentId);
                });
        });

        app.get('/', (req,res) => {
            res.sendFile(path.join(__dirname, '../movies-app/build/index.html'));
        });
    
        app.listen(3000, () => {
            console.log('listening on 3000');
        });
    //});
    

}).catch(error => console.error(error));