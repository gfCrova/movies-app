import placeholder from "../assets/img/placeholder.jpg"
import back from '../assets/img/back-notFound.png'

export const moviePoster = (path, width) => { 
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

export const backdropPath = (path, width) => {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : back;
}