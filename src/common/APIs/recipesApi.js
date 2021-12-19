import axios from "axios";

const users = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})
    
export const getUsers = (intitial) => users.get(intitial)