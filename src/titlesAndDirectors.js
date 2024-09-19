const { movies } = require("../data/list1");

const titlesAndDirectors = (movies) => {
  movies.forEach((item) => console.log(`Título: ${item.titulo} - Diretor: ${item.diretor}`));
}

module.exports = {
  titlesAndDirectors
}