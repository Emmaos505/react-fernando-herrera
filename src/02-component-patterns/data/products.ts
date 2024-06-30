import { Product } from "../interfaces/interfaces";

const productOne = {
    id: '1',
    title: 'Cafe con leche',
    img: './coffee-mug.png'
}

const productTwo = {
    id: '2',
    title: 'Cafe con chocolate',
    img: './coffee-mug.png'
}

const productThree = {
    id: '3',
    title: 'Cafe con licor',
    img: './coffee-mug.png'
}

export const products: Product[] = [productOne, productTwo, productThree];