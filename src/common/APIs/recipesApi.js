import axios from "axios";

const users = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

const avatars = axios.create({
    baseURL: "https://picsum.photos/v2/list?page=2&limit=100"
})

export const getUsers = users.get()
export const getAvatar = users.get()