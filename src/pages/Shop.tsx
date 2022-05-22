import {FC} from 'react'
import { NavBar } from '../components/NavBar'
import { scrollToTop } from '../services/scrolling';

export const Shop:FC = () => {

    scrollToTop()

    return <div style={{width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{width: '100%', textAlign: 'center', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Shop
         </div>
    </div>
}