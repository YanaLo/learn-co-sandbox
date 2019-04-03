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

const submitButton = document.querySelector('#submit-name')
submitButton.addEventListener('click', (event) => {
  const input = document.querySelector('#movie-search-name')
  const movieName = input.value
  fetch('http://www.omdbapi.com/?apikey=c87ebb66&t=' + movieName)
    .then((response) => response.json())
    .then((movieJson) => {
      console.log(movieJson)
      const title = document.querySelector('#title')
      const rated = document.querySelector('#rated')
      const year = document.querySelector('#year')
      const poster = document.querySelector('#movie-poster')
      title.innerText = ''
      rated.innerText = ''
      year.innerText = ''
      poster.src = ''
      
      if (movieJson['Response'] === 'False') {
        const rated = document.querySelector('#rated')
        rated.innerText = 'Title not found, please search again'
        return
      }
      title.innerText = movieJson['Title']
      rated.innerText = movieJson['Rated']
      year.innerText = movieJson['Year']
      poster.src = movieJson['Poster']
    })
})

const submitButtonId = document.querySelector('#submit-id')
submitButtonId.addEventListener('click', (event) => {
  const input = document.querySelector('#movie-search-id')
  const movieId = input.value
  fetch('http://www.omdbapi.com/?apikey=c87ebb66&i=' + movieId)
    .then((response) => response.json())
    .then((movieJson) => {
      const title = document.querySelector('#title')
      const rated = document.querySelector('#rated')
      const year = document.querySelector('#year')
      const poster = document.querySelector('#movie-poster')
      
      title.innerText = movieJson['Title']
      rated.innerText = movieJson['Rated']
      year.innerText = movieJson['Year']
      
      poster.src = movieJson['Poster']
    })
})


// asynchronous programming
// console.log(1 + 2)


