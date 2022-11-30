const fs = require('fs').promises;
const path = require('path');

const readMovies = async () => {
    const data = await fs.readFile(path.resolve(__dirname, './movies.json'));
    const movies = JSON.parse(data);
    console.log(movies);
}

module.exports = readMovies;