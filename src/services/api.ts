import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    params: {
        key: process.env.REACT_APP_API_KEY,
        format: 'json-cors',
    }
    // headers: {
    //     'content-type': 'application/json;charset=utf-8',
    //     'Access-Control-Allow-Origin': '*',
    // }
});