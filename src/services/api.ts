import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    }
});