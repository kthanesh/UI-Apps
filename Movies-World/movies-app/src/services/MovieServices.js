export async function getAllMovies() {

    const response = await fetch('/api/movies');
    return await response.json();
}

export async function searchMovieByName(data) {
    const response = await fetch('/api/searchmoviename', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieName: data})
    });
    return await response.json();
}

export async function getMovieTitleDetails(data) {
    const response = await fetch('/api/movieinfo', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieId: data})
    });
    return await response.json();
}

export async function getMovieIdComments(data) {
    const response = await fetch('/api/getmoviecomment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieId: data})
    });
    return await response.json();
}
export async function postMovieIdComments(movieId,name,comment) {
    const response = await fetch('/api/submitmoviecomment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movieId: movieId, name: name, text: comment})
    });
    return await response.json();
}