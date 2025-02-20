/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Dispatch } from "redux";
import { CartItem, ProductColor, ProductId, ProductToEdit } from "../types";
import { RootState } from "./store";


const URL = "http://localhost:5000";



export const getProducts = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${URL}/products`);
        dispatch({ type: "GET_PRODUCTS", payload: response.data })
    } catch (error: any) {
        console.error(error.message); 
    }
}

export const getProduct = (id: ProductId ) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${URL}/products/${id}`)
        dispatch({ type: "GET_PRODUCT", payload: response.data })
    } catch (error: any) {
        console.error(error.message);
    }
}

export const getProduct2 = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${URL}/products/1`)
        dispatch({ type: "GET_PRODUCT2", payload: response.data })
    } catch (error: any) {
        console.error(error.message);
    }
}

export const getCart = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${URL}/cart`)
        dispatch({ type: "GET_CART", payload: response.data })
    } catch (error:any) {
        console.error(error.message);
    }
}

export const addToCart = (productData: CartItem) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.post(`${URL}/cart`, productData);
        dispatch({ type: "ADD_TO_CART", payload: response.data });
        return { success: true };
    } catch (error: any) {
        console.error(error?.response?.data?.message || error.message || error);
        return { success: false }; 
    }
}

export const deleteProduct = (id: ProductId, color: ProductColor) => async (dispatch: Dispatch) => {
    try {
        await axios.delete(`${URL}/cart/${id}`, {
            data: { color }
        })
        dispatch({ type: "DELETE_PRODUCT", payload:{ productId: id, color: color } })
    } catch (error:any) {
        console.error(error.message);
    }
}

export const editProduct = (id: ProductId, productData: ProductToEdit ) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.put(`${URL}/cart/${id}`, productData);
        dispatch({ type: "EDIT_PRODUCT", payload: response.data })
        return{ success: true }
    } catch (error:any) {
        console.error(error.message);
        return{ success: false }
    }
}

export const filterByCategory = (category: string) => (dispatch: Dispatch, getState: () => RootState) => {
    try {
        const { products_copy } = getState();
        const productsToFilter = [...products_copy]
        const productsFiltered = category ? productsToFilter.filter(product => product.category === category) : productsToFilter;
        dispatch({ type: "FILTER_BY_CATEGORY", payload: productsFiltered })
    } catch (error:any) {
        console.error(error.message);
    }
}

export const orderByPrice = (order: "asc" | "desc") => (dispatch: Dispatch, getState: () => RootState) => {
    try {
        const { products_copy } = getState();
        const productsToOrder = [...products_copy]
        if(order === "desc") {
            productsToOrder.sort((a,b) => a.price - b.price )
        } else if(order === "asc") {
            productsToOrder.sort((a,b) => b.price - a.price)
        }

        dispatch({ type: "ORDER_PRICE", payload: productsToOrder })
    } catch (error:any) {
        console.error(error.message);
    }
}