import { ADD_CAKE, BUY_CAKE } from "./recipesTypes"

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

export const addCake = () =>{
    return {
        type: ADD_CAKE
    }
}