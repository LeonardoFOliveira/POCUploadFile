import axios from 'axios';

const configAxios = axios.create({
    baseURL: 'http://localhost:56836/api'
})

export default configAxios;