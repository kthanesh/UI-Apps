const BASE_API_URL = process.env.API_URL ? process.env.API_URL : 'http://localhost'
const API_PORT = process.env.API_PORT ? process.env.API_PORT : '3000'

export async function getAllMovies() {

    const response = await fetch(`${BASE_API_URL}:${API_PORT}/api/movies`);
    return await response.json();
}

export async function searchMovieByName(data) {
    const response = await fetch(`${BASE_API_URL}:${API_PORT}/api/searchmoviename`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieName: data})
    });
    return await response.json();
}

export async function getMovieTitleDetails(data) {
    const response = await fetch(`${BASE_API_URL}:${API_PORT}/api/movieinfo`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieId: data})
    });
    return await response.json();
}

export async function getMovieIdComments(data) {
    const response = await fetch(`${BASE_API_URL}:${API_PORT}/api/getmoviecomment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieId: data})
    });
    return await response.json();
}
export async function postMovieIdComments(movieId,name,comment) {
    const response = await fetch(`${BASE_API_URL}:${API_PORT}/api/submitmoviecomment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieId: movieId, name: name, text: comment})
    });
    return await response.json();
}