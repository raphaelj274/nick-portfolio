import {FC} from 'react' 
import { Link } from 'react-router-dom'
import useIsMobile from '../services/useIsMobile'

const pages = [{route: '/home', title: 'Nick Collee'},{route:'/works', title: 'Works'},{ route: '/writing', title: 'Writing'},{ route: '/shop', title: 'Shop'}, {route: '/contact', title: 'Contact'}]

export const NavBar: FC = () => {
    if (useIsMobile()) {
        return <>
        </>
    }
    return <div style={{width: '90px', position: 'fixed', marginLeft: '60px', marginTop: '100px', display: 'flex', flexDirection: 'column', gap: 20}}>
        {pages.map(page => <Link to={page.route} style={{textDecoration: 'none', color: 'black'}}>
            {page.title}
         </Link>)}
    </div>
}