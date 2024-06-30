import { useState } from 'react'
import { OnProductChangeProps, ProductInCart, ShoppingPageState } from '../interfaces/interfaces';

const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<ShoppingPageState>({});

    const onProductChange = ({ count, product }: OnProductChangeProps) => {
        setShoppingCart((oldShoppingCart) => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }
            return {
                ...oldShoppingCart,
                [product.id]: {
                    ...product,
                    count
                }
            }
        })
    }

    return {
        shoppingCart,
        onProductChange
    }
}

export default useShoppingCart