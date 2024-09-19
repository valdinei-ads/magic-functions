const movies = require("../data/movies");

const nolanFilms = (movies) => {
  return movies.filter((item) => item.diretor.includes('Nolan') )
        .sort((a, b) => a.avaliacao > b.avaliacao );
}

module.exports = {
  nolanFilms
}