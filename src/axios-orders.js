import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://brgrbldr-44089.firebaseio.com/'
});

export default instance;