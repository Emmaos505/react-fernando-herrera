import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => {
            if (!maxCount || !counter) return false;
            return maxCount === counter;
        },
        [maxCount, counter],
    );

    console.log({
        isMaxReached: isMaxReached(),
        maxCount,
        counter
    })


    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                className={`${isMaxReached() ? styles.disabled : ''} ${styles.buttonAdd}`}
                disabled={isMaxReached()}
                onClick={() => increaseBy(+1)}> + </button>
        </div>
    );
}