
/* Data api  */
const APIKEY = 'cb4f2d22d6d369610a63d1f553f8bb5d';
const BASEURL = 'https://api.themoviedb.org/3/'
const BASEIMG = 'https://image.tmdb.org/t/p/w200'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

/* Get movies of api */
const getMovie = async () => {
    try {
        const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
        const peticion = await fetch(URL)
        const movie = await peticion.json()
        const dataMovie = movie.results
        showData(dataMovie)
        console.log(dataMovie)
    } catch (error) {
        console.log(error)
    }
}

/* Showing movies with literal template*/
const showData = (movie) => {
    movie.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div')
        movieElement.classList.add('template-movie')
        movieElement.innerHTML = '';
        movieElement.innerHTML = `
        <img src="${BASEIMG + poster_path}" alt="">
        <div class="text-white">
            <h3>${vote_average}</h3>
        </div>
    `
        main.appendChild(movieElement);
    });
}




/* form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const searchTerm = search.value

    if(searchTerm != ''){
        getMovie()

    }else{
        window.location.reload()
    }

}) */

getMovie();