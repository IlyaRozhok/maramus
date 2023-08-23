import styles from './styles.module.scss';
import React from 'react';
import Title from "../../components/Title/Title";
import Service from "../../components/Service/Service";

const Services = () => {
    return (
        <section className={styles.wrapper} id='services'>
                <div className={styles.title}><Title value='Services'/></div>
                <hr/>
                <Service title='Full design project with design supervision. Design project + visualizations'/>
                <hr/>
            <Service title={`Individual concept design. Design + visualizations`}/>
                <hr/>
        </section>
    );
};

export default Services;
