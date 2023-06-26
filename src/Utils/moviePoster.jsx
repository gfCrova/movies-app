import placeholder from "../assets/img/placeholder.jpg"

export const moviePoster = (path, width) => { 
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}