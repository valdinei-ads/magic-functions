const movies = require("../data/movies");

const getAllTitles = (movies) => { return movies.map((m) => m.titulo ) }

module.exports = {
  getAllTitles
}