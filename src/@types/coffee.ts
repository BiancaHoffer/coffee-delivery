export interface Product {
    id: number;
    price: number;
    image: string;
    title: string;
    resume: string;
    tags: {
        tag1: string;
        tag2: string;
        tag3: string;
    };
    amount: number;
}