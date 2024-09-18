const movies = require("../data/movies");

function getMovieById(id) {
  return movies.find(item => item.id === id)
}

module.exports = {
  getMovieById
}