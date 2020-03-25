import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mercado-mais-backend.now.sh/3000',
});


export default api;