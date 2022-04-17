import {FC} from 'react' 
import { NavBar } from '../components/NavBar'

export const Contact:FC = () => {
    return <div style={{width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{width: '100%', textAlign: 'center', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Contact me at ngcollee@gmail.com 
         </div>
    </div>
}