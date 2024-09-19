const movies = require("../data/movies");

const filmsAvailable = (movies) => {
  
  var result  = movies.filter((item) => item.disponivel )
                      .map((item) => item.titulo );

  return result;
}

module.exports = {
  filmsAvailable
}