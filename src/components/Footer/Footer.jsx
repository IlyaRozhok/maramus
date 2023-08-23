import styles from './styles.module.scss';
import React from 'react';
import Scroll from "react-scroll";


const Footer = () => {
    const scrollUp = (options) => {
        const scroll = Scroll.animateScroll;
        scroll.scrollToTop(options)
    }

    return (
        <section id='contacts'>
            <div className={styles.wrapper}>
                <div className={styles.text}>GET IN TOUCH</div>
                <div className={styles.contactsContainer}>
                    <div className={styles.smContainer}>
                        <a className={styles.smLink} target="_blank" href="https://www.instagram.com/maramarus/">Instagram</a>
                        <a className={styles.smLink} href="src/components/Footer/Footer#">Facebook</a>
                        <a className={styles.smLink} target="_blank" href="https://www.behance.net/maramarusdesign">Behance</a>
                    </div>
                    <div onClick={(options) => scrollUp('myScrollToElement', {
                        duration: 1500,
                        delay: 100,
                        smooth: 'easeInOutQuint',
                        containerId: 'ContainerElementID',
                    })} className={styles.upArrowContainer}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1226_983)">
                                <path d="M42 30.2008L30 18C26.9986 21.0603 21.0014 27.1405 18 30.2007L19.4898 31.7407C22.1891 28.9877 25.7859 25.3464 28.9407 22.1339L28.9407 42H31.0593V22.1338L40.4938 31.7406L42 30.2008Z" fill="black"/>
                                <circle cx="30" cy="30" r="29" transform="matrix(1 0 0 -1 0 60)" stroke="black" strokeWidth="2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1226_983">
                                    <rect width="60" height="60" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={styles.footerContactsContainer}>
                        <a className={styles.smLink} href="tel:380934549921">+380 (93) 454 99 21</a>
                        <a className={styles.smLink} href="mailto:maramarusdesign@gmail.com">
                            maramarusdesign@gmail.com
                        </a>
                        <p className={styles.smDescription}>(Telegram, WhatsApp)</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
