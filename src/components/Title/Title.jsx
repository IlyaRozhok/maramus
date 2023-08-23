import styles from './styles.module.scss';
import React from 'react';

const Title = ({value}) => {
    return (
        <h2 className={styles.title}>{value}</h2>
    );
};

export default Title;
