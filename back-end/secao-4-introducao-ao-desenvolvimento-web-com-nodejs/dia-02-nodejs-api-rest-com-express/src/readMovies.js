const fs = require('fs').promises;
const path = require('path');

const readMovies = async () => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, './movies.json'));
        const movies = JSON.parse(data);
        return movies;
    } catch (error) {
        console.error(`${error}`)
    }
}

module.exports = { readMovies };