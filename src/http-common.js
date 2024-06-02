import axios from "axios";

const token = localStorage.getItem('token');
console.log(token);
export default axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + token
    }
})