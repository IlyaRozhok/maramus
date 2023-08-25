import styles from './styles.module.scss';
import React, {useRef, useState} from 'react';
import photo from '../../assets/img/formPhoto.png';
import {Button} from "../Button/Button";
import cross from '../../assets/img/cross.svg';
import emailjs from "@emailjs/browser";
import Layout from "../Layout/Layout";

const Form = ({isOpen, closeHandler}) => {

    const [inputUserName, setInputUserName] = useState('');
    const [inputUserPhoneNumber, setInputUserPhoneNumber] = useState('');
    const [inputUserEmail, setInputUserEmail] = useState('');
    const userNameInputHandler = (e) => setInputUserName(e.target.value);
    const userPhoneNumberInputHandler = (e) => setInputUserPhoneNumber(e.target.value);
    const userEmailInputHandler = (e) => setInputUserEmail(e.target.value);
    const form = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('maram_contact_service', 'template_gaavcdk', form.current, 'oypc-KiXUrhpv25lH')
            .then((result) => {
                closeHandler()
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <>
            {isOpen &&
                <div id={'contact-form'} className={styles.wrapper}>
                    <div style={{background: `url(${photo})`, backgroundSize: "cover"}}
                         className={styles.leftSideWrapper}>
                        <h5 className={styles.logo}>MARMARUS DESIGN</h5>
                    </div>
                    <div className={styles.rightSideWrapper}>
                        <p className={styles.formTitle}>
                            LET’S DISCUSS YOUR PROJECTS!
                        </p>
                        <form
                            onSubmit={submitHandler}
                            className={styles.form}
                            encType="text/plain"
                            id={'userForm'}
                            ref={form}>
                            >
                            <div className={styles.cross}>
                                <img onClick={closeHandler} src={cross} alt="cross-svg"/>
                            </div>
                            <input name='user_name'
                                   value={inputUserName}
                                   onChange={userNameInputHandler}
                                   className={styles.input}
                                   placeholder='Name'
                                   type="text"/>
                            <input name='user_phone'
                                   value={inputUserPhoneNumber}
                                   onChange={userPhoneNumberInputHandler}
                                   className={styles.input}
                                   placeholder='Phone number'
                                   type="text"/>
                            <input name='user_email'
                                   value={inputUserEmail}
                                   onChange={userEmailInputHandler}
                                   className={styles.input}
                                   placeholder='E-mail'
                                   type="email"/>
                            <div className={styles.send}>
                                <Button
                                    clickHandler={() => console.log('Sending to email...')}
                                    typeBtn={'submit'}
                                    isSend={true}
                                    className={styles.send}
                                    isDisabled={!isOpen}
                                    text='SEND'/>
                            </div>

                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Form;
