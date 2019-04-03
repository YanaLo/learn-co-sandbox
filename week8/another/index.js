fetch('http://www.omdbapi.com/?apikey=c87ebb66&t=iron+man')
  .then((movieResponse) => {
    return movieResponse.json()
  })
  .then((movieJson) => {
    const title = document.querySelector('#title')
    const rated = document.querySelector('#rated')
    const year = document.querySelector('#year')
    
    title.innerText = movieJson['Title']
    rated.innerText = movieJson['Rated']
    year.innerText = movieJson['Year']
  })


// asynchronous programming
console.log(1 + 2)