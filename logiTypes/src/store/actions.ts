/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Dispatch } from "redux";


const URL = "http://localhost:5000";

export const getProducts = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${URL}/products`);
        dispatch({ type: "GET_PRODUCTS", payload: response.data })
    } catch (error: any) {
        console.error(error.message); 
    }
}