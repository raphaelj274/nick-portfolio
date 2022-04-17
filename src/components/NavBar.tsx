import {FC} from 'react' 
import { Link } from 'react-router-dom'
import useIsMobile from '../services/useIsMobile'

const pages = [{route: '/home', title: 'Nick Collee'},{route:'/works', title: 'Works'},{ route: '/writing', title: 'Writing'},{ route: '/shop', title: 'Shop'}, {route: '/contact', title: 'Contact'}]

export const NavBar: FC = () => {
    if (useIsMobile()) {
        return <>
        </>
    }
    return <div style={{width: '100%', position: 'fixed', marginLeft: '60px', marginTop: '100px', display: 'flex', flexDirection: 'column'}}>
        {pages.map(page => <Link to={page.route} style={{textDecoration: 'none', color: 'black', margin: 10}}>
            {page.title}
         </Link>)}
    </div>
}