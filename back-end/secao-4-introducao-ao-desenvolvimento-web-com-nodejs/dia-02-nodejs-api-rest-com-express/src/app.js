const express = require('express')
const { readMovies } = require('./readMovies');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
    const id = req.params.id;
    const movies = await readMovies()
    const movieById = movies.find((movie) => movie.id === Number(id))
    res.status(200).json(movieById);
});

app.get('/movies', async (req, res) => {
    const movies = await readMovies();
    res.status(200).json(movies);
})

app.post('/movies', async (req, res) => {
    const movies = await readMovies();
    const newMovie = req.body;
    const newMoviesList = [...movies, newMovie];
    res.status(200).json(newMoviesList);
})

app.put('/movies/:id', async (req, res) => {
    const movies = await readMovies();
    const id = req.params.id;
    const { movie } = req.body;
    let updatedMoviesList;

    movies.forEach(element => {
        if(element.id === id) {
            element.movie = movie;
            updatedMoviesList = element;
        }
    })

    res.status(200).json(updatedMoviesList);
})

app.delete('/movies/:id', async (req, res) => {
    const movies = await readMovies();
    const id = req.params.id;
    const movieIndex = movies.findIndex((movie) => movie.id === Number(id))
    movies.splice(movieIndex, 1);
    res.status(200).json({message: 'Registro excluído com sucesso!'});
})

app.get('/movies/search', async (req, res) => {
    const movies = await readMovies();
    const { q } = req.query;
    if(q) {
        const filteredMovies = movies.filter((element) => element.movie.includes('gente'))
        return filteredMovies
    }
    res.status(200).end(); 
    
})

module.exports = app;