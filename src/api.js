import axios from 'axios';

const api = axios.create({
    baseURL: 'https://esportes-and-trends.herokuapp.com/trends/2442047'
});
 
export default api;