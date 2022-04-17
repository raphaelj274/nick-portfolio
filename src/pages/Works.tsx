import {FC} from 'react' 
import { NavBar } from '../components/NavBar'
import { Work } from '../services/works'

export const Works:FC<{works: Array<Work>}> = () => {
    return <div style={{width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{width: '100%', textAlign: 'center', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Works
         </div>
    </div>
}