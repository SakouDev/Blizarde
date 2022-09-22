import axios from 'axios'

const url = 'https://api.rawg.io';
const API_KEY = cd68cf822b8b4b59adf1c46ac1ea961c

const ApiService = {
    get(index) {
        return axios
            .get(`${url}/api/${index}?key=${API_KEY}`)
    },
    getGames(id) {
        return axios
            .get(`${url}/api/games?key=${API_KEY}&genres=${id}`)
    },
    getGamesDetails(gameId) {
        return axios
            .get(`${url}/api/games/${gameId}?key=${API_KEY}`)
    },

}

export { ApiService }