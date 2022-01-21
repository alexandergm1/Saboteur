const baseURL = 'http://localhost:5000/api/game'

export const getData = () => {
    return fetch(baseURL)
    .then(res => res.json())
}