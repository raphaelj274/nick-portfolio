import {FC} from 'react'
import { Link } from 'react-router-dom'
import useIsMobile from '../services/useIsMobile'

const pages = [{route: '/home', title: 'Nick Collee'},{route:'/works', title: 'Works'},{ route: '/writing', title: 'Writing'},{ route: '/shop', title: 'Shop'}, {route: '/contact', title: 'Contact'}]

const mobileStyles = {
    minWidth: '90%',
    width: 'initial',
    justifyContent: 'space-evenly',
    marginTop: '20px',
    marginBottom: '25px',
    marginLeft: 'initial',
    flexDirection: 'row' as const,
    position: 'initial' as const,
    gap: 10
}

const desktopStyles = {
    minWidth: 'initial',
    width: '90px',
    justifyContent: 'initial',
    marginTop: '100px',
    marginBottom: 'initial',
    marginLeft: '60px',
    flexDirection: 'column' as const,
    position: 'fixed' as const,
    gap: 20
}

export const NavBar: FC = () => {

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{minWidth: styles.minWidth, width: styles.width, justifyContent: styles.justifyContent, position: styles.position, marginLeft: styles.marginLeft, marginTop: styles.marginTop, display: 'flex', flexDirection: styles.flexDirection, gap: styles.gap, marginBottom: styles.marginBottom}}>
    {pages.map(page => <Link to={page.route} style={{textDecoration: 'none', color: 'black'}}>
        {page.title}
    </Link>)}
    </div>

}

