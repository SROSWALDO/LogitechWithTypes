export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
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

export type ProductId = Pick<Product, 'id'>['id']

export type ProductColor = Pick<Product, 'color'>['color']

export type ProductDelete = {
    productId: number;
    color: string;
}

export type ProductToEdit = {
    color: string;
    quantity: number;
}

export type ProductEdited = {
    productId: number;
    color: string;
    quantity: number;
}

export type CartItem = {
    productId: number;
    color: string;
    quantity: number;
  };


