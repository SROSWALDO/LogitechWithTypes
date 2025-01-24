interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
    color: string;
    images: {
        url: string;
    }[];
    variants: {
        color: string;
        stock: number;
    }[];
}

interface State {
    products: Product[];
    products_copy: Product[];
    product: Product | null;
    cart: Product[]
}

const initialState : State = {
    products:[],
    products_copy: [],
    product: null,
    cart:[]
}

type Action =  { type: "GET_PRODUCTS"; payload: Product[] } | { type: "GET_PRODUCT"; payload: Product } | { type: "ADD_TO_CART"; payload: Product[] } | { type: "GET_CART"; payload: Product[] }
    | { type: "DELETE_PRODUCT"; payload: { productId: string; color: string } }
    | { type: "EDIT_PRODUCT"; payload: Product }
    | { type: "FILTER_BY_CATEGORY"; payload: Product[] }
    | { type: "ORDER_PRICE"; payload: Product[] }; 


export const reducer = (state: State = initialState, action: Action): State => {
    switch(action.type){
        case "GET_PRODUCTS":
        return {
            ...state,
            products: action.payload,
            products_copy: action.payload
        }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "GET_PRODUCT":
            return {
                ...state,
                product: action.payload
            }      
        default:
            return state
    }
}