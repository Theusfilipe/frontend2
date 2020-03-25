import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mercado-mais-backend.herokuapp.com/',
});


export default api;