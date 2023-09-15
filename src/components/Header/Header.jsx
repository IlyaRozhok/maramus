import React from 'react';
import styles from './styles.module.scss';
import './burger.css';
import {Link} from 'react-scroll';
import {NavLink} from "react-router-dom";
import arrowBack from '../../assets/img/arrow-back.svg'
import useWindowSize from "../../hooks/windowSize";


const Header = ({isSeparateProject}) => {

    let targetOffset, currentPosition,
        body = document.body,
        animateTime = 900;

    function getPageScroll() {
        let yScroll;

        if (document.documentElement && document.documentElement.scrollTop) {
            yScroll = document.documentElement.scrollTop;
        } else if (document.body) {
            yScroll = document.body.scrollTop;
        }
        return yScroll;
    }

    const windowSize = useWindowSize();
    const clickHandler = (event) => {
            targetOffset = document.getElementById(event.target.hash?.substr(1)).offsetTop;
            currentPosition = getPageScroll();

            body.classList.add('in-transition');
            body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
            body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
            body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

            window.setTimeout(function () {
                body.classList.remove('in-transition');
                body.style.cssText = "";
                window.scrollTo(0, targetOffset);
            }, animateTime);

            event.preventDefault();

    }

    return (
        <div className={styles.wrapper}>
            {isSeparateProject &&
                <NavLink className={styles.arrowLinkWrapper} to={`/`}>
                    <img src={arrowBack} alt="back"/>
                </NavLink>
            }
            <div className={!isSeparateProject ? styles.logo : styles.logoMob}>
                MARAMARUS DESIGN
            </div>

            <div>
                {windowSize.width > 768 &&
                    <ul className={styles.menu}>

                        {
                            !isSeparateProject &&
                            <>
                                <li onClick={clickHandler} className={styles.menuItem}>
                                    <Link
                                        className={styles.menuItemLink}
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}>
                                        About
                                    </Link>
                                </li>
                                <li onClick={clickHandler} className={styles.menuItem}>
                                    <Link
                                        className={styles.menuItemLink}
                                        activeClass="active"
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}>
                                        Projects
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuItemLink}
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}>
                                        Services
                                    </Link>
                                </li>
                            </>
                        }
                        <li className={styles.menuItem}>
                            <Link
                                className={styles.menuItemLinkLast}
                                activeClass="active"
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                }
                {windowSize.width < 769 && !isSeparateProject &&
                    <div className="a-header">
                        <input type="checkbox" name="main-nav" id="main-nav" className="burger-check"/>
                        <label htmlFor="main-nav" className="burger menu"><span></span></label>
                        <ul>
                            <li onClick={clickHandler} className={styles.menuItem}>
                                <Link
                                    className={styles.menuItemLink}
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}>
                                    About
                                </Link>
                            </li>
                            <li onClick={clickHandler} className={styles.menuItem}>
                                <Link
                                    className={styles.menuItemLink}
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}>
                                    Projects
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link
                                    className={styles.menuItemLink}
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}>
                                    Services
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link
                                    className={styles.menuItemLinkLast}
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}>
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;
