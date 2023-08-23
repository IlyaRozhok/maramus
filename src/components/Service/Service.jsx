import styles from './styles.module.scss';
import React from 'react';
import plus from '../../assets/img/plus.svg';
import bg from '../../assets/img/serviceBg.png';


const Service = ({title}) => {

    return (
        <details className={styles.wrapper}>
            <summary className={styles.summary}>
                <div className={styles.summaryWrapper}>
                    {title.split('.').map((item) => <>{item}<br/></>)}
                </div>
                <div className={styles.plus}>
                    <img className={styles.plusImg} src={plus} alt="plus-img"/>
                </div>
            </summary>
            <div className={styles.serviceWrapper}>
                <div className={styles.serviceWrapperLeft}>
                    <p className={styles.paragraph}>Components of the complete design project:</p>
                    <br/>
                    <p className={styles.paragraph}>Drawings:</p>
                    <p className={styles.paragraph}>-Measurement plan</p>
                    <p className={styles.paragraph}>-Dismantling plan</p>
                    <p className={styles.paragraph}>-Installation plan</p>
                    <p className={styles.paragraph}>-Furniture plan</p>
                    <p className={styles.paragraph}>-Furniture and lighting specifications</p>
                    <p className={styles.paragraph}>-Lighting plan</p>
                    <p className={styles.paragraph}>-Plan of sockets and switches</p>
                    <p className={styles.paragraph}>-Lighting grouping-Lighting plan</p>
                    <p className={styles.paragraph}>-Electrical outlets plan</p>
                    <p className={styles.paragraph}>-Plan of heating radiators</p>
                    <p className={styles.paragraph}>-Sanitary ware plan</p>
                    <p className={styles.paragraph}>-Plumbing equipment marking plan</p>
                    <p className={styles.paragraph}>-Floor coverings plan</p>
                    <p className={styles.paragraph}>-Wall finishing plan</p>
                    <br/>
                    <p className={styles.paragraph}>-Wall layouts with individual solutions</p>
                    <p className={styles.paragraph}>-Creating the concept of interior design, moodboard</p>
                    <p className={styles.paragraph}>-3d visualizations (2 adjustments)</p>

                </div>
                <div className={styles.serviceWrapperRight}>
                    <br/><br/>
                    <p className={styles.paragraph}>The design supervision includes :</p>
                    <p className={styles.paragraph}>-Selection of materials, furniture, lighting and accessories</p>
                    <p className={styles.paragraph}>-Interior furnishing</p>
                    <p className={styles.paragraph}>-Communication with construction contractors</p>
                    <p className={styles.paragraph}>-Construction site visits (the frequency of visits depends on the specifics of the construction site)</p>
                </div>
            </div>
        </details>
    );
};

export default Service;
