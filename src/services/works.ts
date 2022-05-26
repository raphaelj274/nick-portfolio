import concretePng from '../images/concreteshoe.png'
import linopng from '../images/lino.png'
import sculptureC from '../images/fields.jpeg'
import sculptureD from  '../images/spoon.jpeg'
import sculptureE from  '../images/portrait.jpeg'
import writingPageImage from '../images/tateimage.jpg'
import shoeBackupImage from '../images/concreteshoelowerquality.png'
import linoBackupImage from '../images/linolowerquality.png'


export interface Work {
    id: string,
    image: string,
    backupImage: string,
    alt: string,
    date: string,
    caption: string
    description: string
    imageCaption: string
    relatedImages: RelatedImage[]
}

export interface RelatedImage {
    image: string,
    caption: string
}

const concreteShoeA: RelatedImage = {
    image: sculptureC,
    caption: 'Figure A'
}
const concreteShoeB: RelatedImage = {
    image: sculptureD,
    caption: 'Figure B'
}
const concreteShoeC: RelatedImage = {
    image: sculptureE,
    caption: 'Figure C'
}
const concreteShoeD: RelatedImage = {
    image: linopng,
    caption: 'Figure D'
}

const concreteShoe: Work = {
    id: 'concrete-shoe',
    image: concretePng,
    backupImage: shoeBackupImage,
    imageCaption: 'Final sculpture',
    alt: "Nick's sculpture",
    date: "Granpa's Slippers, 2022" ,
    caption: 'Concrete sculpture and moving image, London',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    relatedImages: [concreteShoeA, concreteShoeB, concreteShoeC, concreteShoeD]
}

const lino: Work = {
    id: 'lino',
    image: linopng,
    backupImage: linoBackupImage,
    imageCaption: 'Scultpure on beach',
    alt: "Nick's sculpture",
    date: "Untitled, Lino 2022",
    caption: 'Sacre-Bleu, France',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    relatedImages: [concreteShoeA, concreteShoeB, concreteShoeC, concreteShoeD]
}

const fields: Work = {
    id: 'fields',
    imageCaption: 'Final sculpture',
    image: sculptureC,
    backupImage: '',
    alt: "Nick's sculpture",
    date: 'Pow 2022',
    caption: 'Lincoln\'s Inn, Somerset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    relatedImages: [concreteShoeA, concreteShoeB, concreteShoeC, concreteShoeD]
}

const spoon: Work = {
    id: 'spoon',
    imageCaption: 'Final sculpture',
    image: sculptureD,
    backupImage: '',
    alt: "Nick's sculpture",
    date: 'Boom 2020',
    caption: 'Big spoon, Toronto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    relatedImages: [concreteShoeA, concreteShoeB, concreteShoeC, concreteShoeD]
}

const portait: Work = {
    id: 'portrait',
    image: sculptureE,
    backupImage: '',
    imageCaption: 'Final sculpture',
    alt: "Nick's sculpture",
    date: 'Portrait of a mother 2020',
    caption: 'Ontario, Toronto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    relatedImages: [concreteShoeA, concreteShoeB, concreteShoeC, concreteShoeD]
}

export const works = [concreteShoe, lino, fields, spoon, portait]


// Writing exports below

export interface WritingContent {
    heading: string,
    paragraphs: Array<string>,
    italicText: string,
    image: string,
    imageCaption: string,
    imageAltText: string
}

export const writingContent: WritingContent = {
    heading: 'A theatrical exhibition by the Turner Prize winning artist and cultural activist',
    paragraphs: ['This large-scale exhibition will debut recent work and include selected highlights from Lubaina Himid’s influential career. Taking inspiration from her interest in theatre, the exhibition will unfold in a sequence of scenes designed to place visitors centre-stage and backstage.',
    'Initially trained in theatre design, Himid is known for her innovative approaches to painting and to social engagement. She has been pivotal in the UK since the 1980s for her contributions to the British Black arts movement, making space for the expression and recognition of Black experience and womens creativity. Over the last decade, she has of Black experience and women\'s creativity. Over the last decade, she has earned international recognition for her figurative paintings, which explore overlooked and invisible aspects of history and of contemporary everyday life. In 2017 she was awarded the Turner Prize and in 2018 she was bestowed with the honorary title of CBE for her contributions to the arts.'],
    italicText: 'Exhibition organised by Tate Modern in collaboration with Musée cantonal des Beaux-Arts de Lausanne/Plateforme 10',
    image: writingPageImage,
    imageCaption: 'Lubaina Himid <i>Six Tailors</i> 2019 Rennie Collection, Vancouver &copy; Lubaina Himid',
    imageAltText: 'placeholder'
}
