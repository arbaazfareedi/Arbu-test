import { ADD_TO_CART,REMOVE_TO_CART } from "../constants"
export const addtocart = (data) => {
    // console.log("add to cart",data)
return {
        type: ADD_TO_CART,
        data:data
    }
}

export const removetocart = (data) => {
    return {
            type: REMOVE_TO_CART,
            data:data
        }
    }