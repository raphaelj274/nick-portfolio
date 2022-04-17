import sculptureA from '../images/laura-seaman-01RpyK6lKBs-unsplash.jpg'
import sculptureB from '../images/sirirat-wuthipracharat-qytWcXSCDug-unsplash.jpg'
import sculptureC from '../images/qingbao-meng-01_igFr7hd4-unsplash.jpg'

export interface Work {
    image: string,
    alt: string,
    date: string,
    caption: string
}

const wallOfFaces: Work = {
    image: sculptureA,
    alt: "Nick's sculpture",
    date: 'Faces 2021',
    caption: 'Concrete sculpture and moving image, London'
}
const church: Work = {
    image: sculptureB,
    alt: "Nick's sculpture",
    date: 'God 2022',
    caption: 'Sacre-Bleu, France'
}
const fields: Work = {
    image: sculptureC,
    alt: "Nick's sculpture",
    date: 'Pow 2022',
    caption: 'Lincoln\'s Inn, Somerset'
}



export const works = [wallOfFaces, church, fields]