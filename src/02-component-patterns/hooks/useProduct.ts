import { useEffect, useRef, useState } from 'react'

import { OnProductChangeProps, Product } from '../interfaces/interfaces';

interface useProductProps {
    onchange?: (args: OnProductChangeProps) => void;
    product: Product;
    value?: number;
}


export const useProduct = ({ onchange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onchange);

    console.log({ isControlled })

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onchange!({ count: value, product })
        }

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