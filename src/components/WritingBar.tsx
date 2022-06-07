import {FC} from 'react'
import { Link } from 'react-router-dom'
import useIsMobile from '../services/useIsMobile'
import { writings } from '../services/works'
import { scrollToHash } from '../services/scrolling';

export const WritingBar: FC = () => {

    const desktopStyles = {
        minWidth: 'initial',
        width: '90px',
        justifyContent: 'initial',
        marginTop: '180px',
        marginBottom: 'initial',
        marginLeft: '150px',
        flexDirection: 'column' as const,
        position: 'fixed' as const,
        gap: 20
    }

    const mobileStyles = {
        minWidth: '90%',
        width: 'initial',
        justifyContent: 'space-evenly',
        marginTop: '30px',
        marginBottom: '25px',
        marginLeft: 'initial',
        flexDirection: 'row' as const,
        position: 'initial' as const,
        gap: 10
    }

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{minWidth: styles.minWidth, width: styles.width, justifyContent: styles.justifyContent, position: styles.position, marginLeft: styles.marginLeft, marginTop: styles.marginTop, display: 'flex', flexDirection: styles.flexDirection, gap: styles.gap, marginBottom: styles.marginBottom}}>
    {writings.map(writing => <div key={writing.heading} onClick={() => scrollToHash(writing.heading)} style={{textDecoration: 'none', color: 'black'}}>
        {writing.heading}
    </div>)}
    </div>

}
