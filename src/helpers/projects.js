import terraFirstscreen from "../assets/img/terra-firstscreen.png";
import vilkiPalkiScreen from "../assets/img/vilki-firstscreen.png";
import {terraGallery} from "./galleries/terra-gallery";
import {vilkiPalkiGallery} from "./galleries/vilki-palki-gallery";
import {apartmentTwentyOneGallery} from "./galleries/apartment-twenty-one";
import {softGreyGallery} from "./galleries/soft-grey-gallery";

export const PROJECTS = {
    TERRA_OFFICE: 'terra-office',
    VILKI_PALKI: 'vilki-palki',
    APARTMENT_21: 'apartment-21',
    SOFT_GREY: 'soft-grey-office',
}

export const terraOfficeProjectData = {
    name: '139 TERRA OFFICE',
    description: 'Office for an international company in the center of the capital of Ukraine at Business Center Magnet We created a unique space - ergonomic office, designed to the smallest details. Acoustic panels on the ceiling provide a high level of sound isolation across the entire office. The interior is filled with thoughtful details, interesting shapes and delicious combinations of colors. There are no fixed workplaces in the open space area. There is a relaxing area with swings, surrounded by palm trees with the view on Kyiv. The kitchen has a garbage sorting system.',
    param: PROJECTS.TERRA_OFFICE,
    img: terraGallery.firstScreen,
    square: '1200 m², Kyiv (UA), 2022.',
    team: {
        Designers: 'Maryna Tymofieieva, Maryna Daniltseva, Oleksandra Bondarchuk',
        Architect: 'Denys Zavadskyy',
        Engineer: 'Tetiana Bloshchanevych',
        'Project Manager': 'Yurii Kolesnikov',
        Photographs: 'Igor Ishchuk',
        Construction: 'Partner C'
    }
}
export const vilkiPalkiProjectData = {
    name: 'Vilkipalki Project | Online Restaurant & Office Space',
    description: 'Office for an international company in the center of the capital of Ukraine at Business Center Magnet We created a unique space - ergonomic office, designed to the smallest details. Acoustic panels on the ceiling provide a high level of sound isolation across the entire office. The interior is filled with thoughtful details, interesting shapes and delicious combinations of colors. There are no fixed workplaces in the open space area. There is a relaxing area with swings, surrounded by palm trees with the view on Kyiv. The kitchen has a garbage sorting system.',
    param: PROJECTS.VILKI_PALKI,
    img: vilkiPalkiGallery.firstScreen,
    square: '45 m²,  Odesa, (UA), 2023.',
    team: {
        Designers: 'Maryna Tymofieieva, Denys Zavadskyy',
        Photographs: 'Igor Ishchuk'
    }
}
export const apartmentTwentyOneProjectData = {
    name: 'Project Apartment 21',
    description: 'Bright and minimalistic concept for 21 apartments. Fine lines, combination of different types of wood, textured walls. Brass details and textiles made of natural fabrics give a feeling of coziness.',
    param: PROJECTS.APARTMENT_21,
    img: apartmentTwentyOneGallery.firstScreen,
    square: '21,44 m², Kyiv (UA), 2021.',
    team: {
        Designers: 'Maryna Tymofieieva'
    }
}
export const softGreyProjectData = {
    name: 'Project SOFT GREY OFFICE',
    description: 'Comfortable and relaxed office in the heart of Kyiv. Space includes mobile and current workspaces that allow transform office into different purposes. Wooden partitions in the open space area allow for convenient storage of necessary things.The office has many areas that provide comfortable leisure during breaks or just a place to reboot and relax.',
    param: PROJECTS.SOFT_GREY,
    img: softGreyGallery.firstScreen,
    square: '1654,51  m², Kyiv (UA), 2022. ',
    team: {
        Designers: 'Marina Timofeeva, Marina Daniltseva, Anna Karapetyan.'
    }
}

export const getProject = (projectName) => {
    switch (projectName) {
        case PROJECTS.VILKI_PALKI: {
            return {
                projectData: vilkiPalkiProjectData,
                projectGallery:  vilkiPalkiGallery
            }
        }
        case PROJECTS.TERRA_OFFICE: {
            return {
                projectData: terraOfficeProjectData,
                projectGallery: terraGallery
            }
        }
        case PROJECTS.APARTMENT_21: {
            return {
                projectData: apartmentTwentyOneProjectData,
                projectGallery: apartmentTwentyOneGallery
            }
        }
        case PROJECTS.SOFT_GREY: {
            return {
                projectData: softGreyProjectData,
                projectGallery: softGreyGallery
            }
        }
    }
}

