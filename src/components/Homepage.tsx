import {FC, useState} from 'react'
import { Entry } from './Entry'
import { HomePageContent } from './HomePageContent'
import sculptureA from '../images/laura-seaman-01RpyK6lKBs-unsplash.jpg'
import sculptureB from '../images/sirirat-wuthipracharat-qytWcXSCDug-unsplash.jpg'
import sculptureC from '../images/qingbao-meng-01_igFr7hd4-unsplash.jpg'

export const Homepage:FC = () => {
    const [entered, setEntered] = useState(false)
    const images = [sculptureA, sculptureB, sculptureC]

    return <div>
        {entered ? <HomePageContent images={images}/> : <Entry setEntered={setEntered}/>}
    </div>
}