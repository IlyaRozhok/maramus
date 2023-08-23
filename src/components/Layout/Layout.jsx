import styles from './styles.module.scss';
import React, {Fragment} from 'react';

const Layout = ({ isOpen, onClose, children }) => {
    return (
        <Fragment>
            {isOpen && (
                <>
                    <div className="overlay">
                        <div className={styles.overlayBackground} onClick={onClose} />
                    </div>
                    {children}
                </>
            )}
        </Fragment>
    );
};

export default Layout;
