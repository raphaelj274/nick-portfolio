import {FC, useState} from 'react'
import { Entry } from './Entry'
import { EmptyBar } from './EmptyBar'
import { HomePageContent } from './HomePageContent'

export const Homepage:FC = () => {
    const [entered, setEntered] = useState(false)

    return <div>
        <EmptyBar/>
        {entered ? <HomePageContent/> : <Entry setEntered={setEntered}/>}
    </div>
}