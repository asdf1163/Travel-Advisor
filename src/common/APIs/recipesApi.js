import axios from "axios";

const users = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com/users"
    baseURL: "http://localhost:8000/"
})
    
export const getUsers = (intitial) => users.get(intitial)