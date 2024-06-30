import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const { onProductChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        onchange={onProductChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}

            </div>

            <div className="shopping-cart">
                {
                    !!Object.values(shoppingCart).length &&
                    Object.values(shoppingCart).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onchange={onProductChange}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

        </div>
    )
}
