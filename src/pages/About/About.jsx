import styles from './styles.module.scss';
import React from 'react';
import Title from "../../components/Title/Title";
import aboutPng from '../../assets/img/about.png'

const About = () => {
    return (
        <>
            <section id='about'>
                <div className={styles.wrapper}>
                    <div className={styles.textWrapper}>
                        <div className={styles.about}><Title value='About'/></div>
                            <div className={styles.textBlock}>
                                We create spaces for different purposes. Commercial and private interiors. Working with us is always
                                a wonderful synergy. Our philosophy is to shape your space not just into something stylish and
                                functional, but to give it character and emphasize its history.
                            </div>
                            <div className={styles.textBlock}>
                                Our community has existed since 2020. A team of designers and architects who are always growing and
                                improving their visual world with new experiences.
                            </div>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={aboutPng} alt="about-png"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
