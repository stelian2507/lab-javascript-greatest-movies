
function getAllDirectors(dirArr) {
    return dirArr.map((movie) => {
      return movie.director;
    });
  }
  
  
  
  function howManyMovies(array) {
    return array.filter((movie) => {
      const directedStevenS = movie.director == "Steven Spielberg";
      const dramaMovie = movie.genre.includes("Drama");
      return directedStevenS && dramaMovie;
    }).length;
  }
  
 
  function ratesAverage(myArr) {
    return (
      Number(
        (
          myArr.reduce((acc, movie) => {
            return (acc += movie.rate || 0);
          }, 0) / myArr.length
        ).toFixed(2)
      ) || 0
    );
  }
  
  
  function dramaMoviesRate(array) {
    let filteredDramaMovies = array.filter((eachMovie) => {
      return eachMovie.genre.includes('Drama')
    })
  
    return ratesAverage(filteredDramaMovies)
  }
  
  
  function orderByYear(array) {
    console.log(array)
    const result = array.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
  
        return a.title.localeCompare(b.title);
      }
    })
    return [...result];
  }
  
  
  
  
  
  function orderAlphabetically(arr) {
  
    let sortedArray = [...arr].sort((a, b) => {
      return (a.title.localeCompare(b.title)) //it is either 0,1,-1
  
  
    })
  
    let first20titles = sortedArray.slice(0, 20).map(item => {
      return item.title
    })
  
    return first20titles
    