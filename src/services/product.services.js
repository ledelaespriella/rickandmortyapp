import axios from 'axios';

const getProduct = () => {
    const headers = {
        Authorization: localStorage.token,
        "Content-Type": "application/json; charset=utf-8",
    };
    return axios.get('http://localhost:3001/api/product', { headers });
}

const saveProduct = (data) => {

    const headers = {
        Authorization: localStorage.token,
        "Content-Type": "application/json; charset=utf-8",
    };

    return axios.post('http://localhost:3001/api/product', data, { headers });
}


export { getProduct, saveProduct };