import { useEffect, useRef, useState } from 'react'

import { InitialValues, OnProductChangeProps, Product } from '../interfaces/interfaces';

interface useProductProps {
    onchange?: (args: OnProductChangeProps) => void;
    product: Product;
    value?: number;
    initialValues?: InitialValues
}


export const useProduct = ({ onchange, product, value = 0, initialValues }: useProductProps) => {

    const [counter, setCounter] = useState(initialValues?.count || value)
    const isMounted = useRef(false);


    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);
    console.log({ isMounted })

    const increaseBy = (value: number) => {
        let newCount = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newCount = Math.min(newCount, initialValues.maxCount)
        }
        setCounter(newCount)
        onchange && onchange({ count: newCount, product })
    }

    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount
    }

}