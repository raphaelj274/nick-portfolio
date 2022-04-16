import {FC, useState} from 'react'
import { Entry } from './Entry'
import { HomePageContent } from './HomePageContent'

export const Homepage:FC = () => {
    const [entered, setEntered] = useState(false)

    return <>
        {entered ? <HomePageContent/> : <Entry setEntered={setEntered}/>}
    </>
}