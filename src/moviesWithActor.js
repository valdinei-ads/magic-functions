const movies = require("../data/movies");

function moviesWithActor(ator) {

  var result = movies.filter((item) => {
    item.elenco.includes(ator)
  }).map((item) => item );

  return result;
}

module.exports = {
  moviesWithActor
}