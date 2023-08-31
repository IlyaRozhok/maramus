import styles from './styles.module.scss';
import React from 'react';
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/windowSize";

const LandingProject = ({param, name, square, screen}) => {
    const windowSize = useWindowSize();
    return (
        <div key={new Date().getHours()} className={styles.wrapper}>
            <hr/>
            <div className={styles.projectContainer}>

                {windowSize.width > 768 ?
                    <div className={styles.projectNameContainer}>
                        <div>{square}</div>
                    </div> :
                    <div className={styles.flex}>
                        <div className={styles.projectTeam}>{name}</div>
                        <Link to={`projects/${param}`}>
                                <svg className={styles.arrowLink} width="32" height="32" viewBox="0 0 32 32"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="7" y="7" width="18" height="2"/>
                                    <path d="M23 25L23 7H25L25 25L23 25Z"/>
                                    <path
                                        d="M7.12695 23.9316L22.5489 8.24206L23.9738 9.64559L8.55178 25.3352L7.12695 23.9316Z"/>
                                </svg>
                        </Link>
                    </div>
                }
                <div className={styles.descriptionContainer}>
                    {windowSize.width > 768 &&
                        <img src={screen} alt="project-img"/>
                    }

                    <div className={styles.linkRow}>
                        {windowSize.width > 768 ?
                            <div>
                                <div className={styles.projectTeam}>{name}</div>
                                <>HI</>

                            </div> :
                            <div className={styles.projectNameContainer}>
                                <div>{square}</div>
                            </div>
                        }
                        {windowSize.width > 768 &&
                            <Link to={`projects/${param}`}>
                                {
                                    <svg className={styles.arrowLink} width="32" height="32" viewBox="0 0 32 32"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="7" y="7" width="18" height="2"/>
                                        <path d="M23 25L23 7H25L25 25L23 25Z"/>
                                        <path
                                            d="M7.12695 23.9316L22.5489 8.24206L23.9738 9.64559L8.55178 25.3352L7.12695 23.9316Z"/>
                                    </svg>
                                }
                            </Link>}
                    </div>
                    {windowSize.width < 768 &&
                        <img src={screen} alt="project-img"/>
                    }
                </div>

            </div>

        </div>
    );
};

export default LandingProject;
