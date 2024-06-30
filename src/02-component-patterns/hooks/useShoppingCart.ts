import { useState } from 'react'
import { OnProductChangeProps, ProductInCart, ShoppingPageState } from '../interfaces/interfaces';

const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<ShoppingPageState>({});

    const onProductChange = ({ count, product }: OnProductChangeProps) => {
        const oldShoppingCart = { ...shoppingCart }
        const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

        if (Math.max(productInCart.count + count, 0) > 0) {
            return setShoppingCart({
                ...oldShoppingCart,
                [productInCart.id]: { ...productInCart, count: productInCart.count + count }
            })
        }

        delete oldShoppingCart[productInCart.id];
        setShoppingCart({ ...oldShoppingCart });
    }

    return {
        shoppingCart,
        onProductChange
    }
}

export default useShoppingCart