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

interface CartProduct {
    productId: number;
    name: string;
    image: string;
    color: string;
    quantity: number;
    price: number;
}

interface State {
    products: Product[];
    products_copy: Product[];
    product: Product | null;
    cart: CartProduct[]
}

const initialState : State = {
    products:[],
    products_copy: [],
    product: null,
    cart:[]
}

type Action =  { type: "GET_PRODUCTS"; payload: Product[] } | { type: "GET_PRODUCT"; payload: Product } | { type: "ADD_TO_CART"; payload: CartProduct[] } | { type: "GET_CART"; payload: CartProduct[] }
    | { type: "DELETE_PRODUCT"; payload: { productId: number; color: string } }
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
        case "GET_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter(product => !(product.productId === action.payload.productId && product.color === action.payload.color ) )
            }              
        default:
            return state
    }
}