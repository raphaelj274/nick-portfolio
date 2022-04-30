import sculptureA from '../images/concreteshoe.png'
import sculptureB from '../images/lino.png'
import sculptureC from '../images/fields.jpeg'
import sculptureD from  '../images/spoon.jpeg'
import sculptureE from  '../images/portrait.jpeg'

export interface Work {
    id: string,
    image: string,
    alt: string,
    date: string,
    caption: string
    description: string
}

const concreteShoe: Work = {
    id: 'concreteshoe',
    image: sculptureA,
    alt: "Nick's sculpture",
    date: "Granpa's Slippers, 2022" ,
    caption: 'Concrete sculpture and moving image, London',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
const lino: Work = {
    id: 'lino',
    image: sculptureB,
    alt: "Nick's sculpture",
    date: "Untitled, Lino 2022",
    caption: 'Sacre-Bleu, France',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
const fields: Work = {
    id: 'fields',
    image: sculptureC,
    alt: "Nick's sculpture",
    date: 'Pow 2022',
    caption: 'Lincoln\'s Inn, Somerset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
const spoon: Work = {
    id: 'spoon',
    image: sculptureD,
    alt: "Nick's sculpture",
    date: 'Boom 2020',
    caption: 'Big spoon, Toronto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
const portait: Work = {
    id: 'portrait',
    image: sculptureE,
    alt: "Nick's sculpture",
    date: 'Portrait of a mother 2020',
    caption: 'Ontario, Toronto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}



export const works = [concreteShoe, lino, fields, spoon, portait]