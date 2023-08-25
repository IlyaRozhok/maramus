import styles from './styles.module.scss';
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import {getProject} from "../../helpers/projects";

const SeparateProject = () => {
    const [currentProject, setCurrentProject] = useState({});
    const [team, setTeam] = useState([]);
    const [gallery, setGallery] = useState([]);
    const {projectName} = useParams();
    useEffect(() => {
        const project = getProject(projectName);
        setTeam(Object.keys(project?.projectData.team));
        setGallery(Object.keys(project?.projectGallery));
        setCurrentProject(project);
    }, [projectName])


    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperHeader}>
                <Header isSeparateProject={true}/>
            </div>
            <div className={styles.title}>
                <Title value={currentProject?.projectData?.name}/>
            </div>
            <hr/>
            <div className={styles.contentWrapper}>
                <div>
                    {currentProject?.projectData?.square}
                </div>
                <div className={styles.rightSideContentWrapper}>
                    <div className={styles.description}>
                        {currentProject?.projectData?.description}
                    </div>
                    <div className={styles.team}>
                        {
                            team.map((item, index) => {
                                return (
                                    <div className={styles.teamMember} key={index}>
                                        <div className={styles.teamPosition}>{`${item}:`}</div>
                                        <div className={styles.teamMemberName}>{currentProject.projectData?.team[`${item}`]}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className={styles.gallery}>
                        {
                            gallery?.map((item, index) => {
                                return (
                                    <div className={styles.galleryPhotoWrapper} key={index}>
                                        <img className={styles.galleryImg} src={currentProject?.projectGallery[`${item}`]} alt="img"/>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SeparateProject;
