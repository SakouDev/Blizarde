import axios from 'axios'

const url = 'https://api.rawg.io';

const ApiService = {
    get(index) {
        return axios
            .get(`${url}/api/${index}?key=${process.env.NEXT_PUBLIC_API_KEY}`)
    },
    getGames(id) {
        return axios
            .get(`${url}/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&genres=${id}`)
    },
    getGamesDetails(gameId) {
        return axios
            .get(`${url}/api/games/${gameId}?key=${process.env.NEXT_PUBLIC_API_KEY}`)
    },

}

export { ApiService }