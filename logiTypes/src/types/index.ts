export type Product = {
    id: string;
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