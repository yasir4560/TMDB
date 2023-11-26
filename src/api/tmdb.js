import axios from "axios";


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: "application/json"
    },
    params: {
        api_key: '198776dfcf0efbc8cd7e9c6ed26fca4f'
    }
})