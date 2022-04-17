import {FC} from 'react' 
import { Link } from 'react-router-dom'

export const NavBar: FC = () => {
    return <div style={{width: '100%', position: 'fixed', marginLeft: '60px', marginTop: '100px'}}>
        <p style={{margin: 0}}> Nick Collee
        </p> 
         <p>
            Works
         </p>
         <p>
            Writing
         </p>
         <p>
            Shop
         </p>
         <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
            Contact
         </Link>
    </div>
}