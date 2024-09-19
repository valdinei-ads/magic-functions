const movies = require("../data/movies");

const filmSorted = (movies) => {
  return  movies.sort((a, b) => a.anoLancamento - b.anoLancamento )
                .map((item) => item );
}

module.exports = {
  filmSorted
}