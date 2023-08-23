import styles from './styles.module.scss';
import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import {Button} from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Layout from "../../components/Layout/Layout";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openHandler = () => setIsOpen(!isOpen);
    const closeHandler = () => setIsOpen(false);

    return (
        <>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.btnWrapper}>
                    <Button
                        isDisabled={isOpen}
                        clickHandler={openHandler}
                        text='GET ORDER'/>
                </div>

            </div>
            {isOpen && <Layout isOpen={isOpen} onClose={closeHandler}/>}
            {isOpen && <Form isOpen={isOpen} closeHandler={closeHandler}/>}
        </>

    );
};

export default Home;
