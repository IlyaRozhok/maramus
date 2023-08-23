import styles from './styles.module.scss';
import React from 'react';

export const Button = ({isSend = false, isDisabled, text, clickHandler, typeBtn}) => {

    const op = {
    backgroundColor: 'black',
    color: 'white',
    };

    const getClassName = () => {
        if (isSend) {
            return `${styles.wrapper} ${styles.wrapperSend}`
        }
        return `${styles.wrapper}`
    }

    return (
        <button
            type={typeBtn ? typeBtn : 'button'}
            style={isSend ? op : null}
            disabled={isDisabled}
            className={getClassName()}
            onClick={(e) => clickHandler(e)}>
            {text}
        </button>
    )
}
