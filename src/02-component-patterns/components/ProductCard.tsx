import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnProductChangeProps, InitialValues, ProductCartHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children: (args: ProductCartHandlers) => React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties
    onchange?: (args: OnProductChangeProps) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = ({ children, product, className, style, onchange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount } = useProduct({ onchange, product, value, initialValues });
    const reset = () => {

    };

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset

                })}
            </div>
        </Provider>
    )
}
