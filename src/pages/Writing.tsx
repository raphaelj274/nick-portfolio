import {FC} from 'react' 
import { NavBar } from '../components/NavBar'

export const Writing:FC = () => {
    return <div style={{width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{width: '100%', textAlign: 'center', height: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
             <h1>
                Writing 
             </h1>
             <p>
                 hehehh
             </p>
         </div>
    </div>
}