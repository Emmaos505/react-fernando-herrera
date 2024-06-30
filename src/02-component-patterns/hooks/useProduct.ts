import { useEffect, useState } from 'react'

import { OnProductChangeProps, Product } from '../interfaces/interfaces';

interface useProductProps {
    onchange?: (args: OnProductChangeProps) => void;
    product: Product;
    value?: number;
}


export const useProduct = ({ onchange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {
        const newCount = Math.max(counter + value, 0);
        setCounter(prev => Math.max(prev + value, 0))
        onchange && onchange({ count: newCount, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }

}