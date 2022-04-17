import {FC} from 'react' 
import { Link } from 'react-router-dom'
import entry from '../images/Black-And-White-Frame-4.svg'

export const Entry:FC = () => {
    return <div style={{color: "white", border: '1px solid black', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Link to='/home'>
            <img src={entry} width={'100%'} alt="Art on load"/>
        </Link>
    </div>
}