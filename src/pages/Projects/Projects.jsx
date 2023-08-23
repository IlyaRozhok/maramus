import styles from './styles.module.scss';
import React, {useState} from 'react';
import Title from "../../components/Title/Title";
import LandingProject from "../../components/LandingProject/LandingProject";
import {
    apartmentTwentyOneProjectData,
    softGreyProjectData,
    terraOfficeProjectData,
    vilkiPalkiProjectData
} from "../../helpers/projects";


const Projects = () => {
    const [projectQuantity, setProjectsQuantity] = useState(2);
    const moreHandler = () => setProjectsQuantity(projectQuantity + 2);
    return (
        <section id='projects' className={styles.wrapper}>
            <Title value='Projects'/>
            <LandingProject
                param={terraOfficeProjectData.param}
                screen={terraOfficeProjectData.img}
                description={terraOfficeProjectData.description}
                name={terraOfficeProjectData.name}
                square={terraOfficeProjectData.square}/>
            <LandingProject
                screen={vilkiPalkiProjectData.img}
                name={vilkiPalkiProjectData.name}
                square={vilkiPalkiProjectData.square}
                description={vilkiPalkiProjectData.description}
                param={vilkiPalkiProjectData.param}
            />
            {projectQuantity > 3 &&
                <>
                    <LandingProject
                        screen={apartmentTwentyOneProjectData.img}
                        name={apartmentTwentyOneProjectData.name}
                        square={apartmentTwentyOneProjectData.square}
                        description={apartmentTwentyOneProjectData.description}
                        param={apartmentTwentyOneProjectData.param}
                    />
                    <LandingProject
                        screen={softGreyProjectData.img}
                        name={softGreyProjectData.name}
                        square={softGreyProjectData.square}
                        description={softGreyProjectData.description}
                        param={softGreyProjectData.param}
                    />
                </>
            }
            {projectQuantity < 3 &&
                <div
                    onClick={moreHandler}
                    className={styles.more}><p
                    className={styles.moreText}>More</p>
                </div>}
        </section>
    );
};

export default Projects;
