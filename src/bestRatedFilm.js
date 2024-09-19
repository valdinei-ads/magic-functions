const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  
  if (movies === undefined || movies === null || movies.length === 0) return undefined; 

  var result = movies.reduce((melhor, filme) =>  melhor.avaliacao > filme.avaliacao 
    ? melhor 
    : filme
  );
  
  return result;
}

module.exports = {
  bestRatedFilm
}