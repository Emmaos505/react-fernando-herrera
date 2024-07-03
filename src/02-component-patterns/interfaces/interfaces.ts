import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
    onchange?: (args: OnProductChangeProps) => void;
    value?: number;
    maxCount?: number;
}


export interface ProductCardHOCProps {
    ({ children, product, onchange, value }: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface ProductInCart extends Product {
    count: number;
}


export interface OnProductChangeProps {
    product: Product;
    count: number;
}

export type ShoppingPageState = Record<string, ProductInCart>;

export interface InitialValues {
    count: number;
    maxCount?: number;
}

export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}
