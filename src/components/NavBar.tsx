import {FC} from 'react'
import { Link } from 'react-router-dom'
import useIsMobile from '../services/useIsMobile'

const pages = [{route: '/home', title: 'Nick Collee'},{route:'/works', title: 'Works'},{ route: '/writing', title: 'Writing'},{ route: '/shop', title: 'Shop'}, {route: '/contact', title: 'Contact'}]

const mobileStyles = {
    minWidth: '100%',
    justifyContent: 'space-evenly',
    marginTop: '20px',
    marginBottom: '25px',
    marginLeft: 'initial',
    flexDirection: 'row',
    position: 'initial'
}

const desktopStyles = {
    minWidth: 'initial',
    justifyContent: 'initial',
    marginTop: '100px',
    marginBottom: 'initial',
    marginLeft: '60px',
    flexDirection: 'column',
    position: 'fixed'
}

export const NavBar: FC = () => {

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    if (useIsMobile()) {
        return <div style={{minWidth: '100%', justifyContent: 'space-evenly', marginTop: '20px', display: 'flex', flexDirection: 'row', gap: 20, marginBottom: '25px'}}>
        {pages.map(page => <Link to={page.route} style={{textDecoration: 'none', color: 'black'}}>
            {page.title}
         </Link>)}
    </div>
    } else {
    return <div style={{width: '90px', position: 'fixed', marginLeft: '60px', marginTop: '100px', display: 'flex', flexDirection: 'column', gap: 20}}>
        {pages.map(page => <Link to={page.route} style={{textDecoration: 'none', color: 'black'}}>
            {page.title}
         </Link>)}
    </div>
    }
}