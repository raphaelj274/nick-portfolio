import {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import { Work } from '../services/works'
import StackGrid from "react-stack-grid";
import { scrollToTop } from '../services/scrolling';
import useIsMobile from '../services/useIsMobile';
import { EmptyBar } from '../components/EmptyBar';


const mobileStyles = {
    gridMargin: '30px auto 30px auto',
    width: '95%',
    minWidth: 'initial',
    columnWidth: '36%'

}

const desktopStyles = {
    gridMargin: '100px auto 50px 200px',
    width: 'calc(100% - 380px)',
    minWidth: '68%',
    columnWidth: '33%'
}

const ContactElement:FC<{work: Work}> = ({work}) => {

    const image = work.backupImage || work.image

    scrollToTop()

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/project/${work.id}`, { state: {previousPage: 'works'} })
    }
    return <div style={{padding: 3}} onClick={onClick}>
        <img src={image} width={'100%'} alt={work.alt} style={{}}/>
    </div>
}


export const Works:FC<{works: Array<Work>}> = ({works}) => {

    const [workState, setWorkState] = useState(0)


    // Changes the state (and thus rerenders the component) until the document body height exceeds the
    // specified limit of 1000. With the current displayed works, when the grid doesn't render properly,
    // the document height is around 338 on mobile, and around 262 on desktop. When the grid does render
    // properly, the document height is around 2321 on mobile, and 2666 on desktop. Using 500 as the
    // limit still causes issues, despite being above the inproper heights specified above

    setTimeout(() => {
        if (window.document.body.offsetHeight < 1000) {
          setWorkState(workState + 1)
        }
    }, 0)

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{maxWidth: '100%', width: '100vw'}}>
         <EmptyBar/>
         <NavBar/>
         <div style={{border: '1px solid white'}}>
         </div>
         <StackGrid columnWidth={styles.columnWidth} style={{boxSizing: 'border-box', width: styles.width, margin: styles.gridMargin, overflow: 'hidden', minWidth: styles.minWidth}}>
             {works.map(work => <ContactElement work={work}/>)}
             {works.map(work => <ContactElement work={work}/>)}
             {works.map(work => <ContactElement work={work}/>)}
         </StackGrid>

    </div>
}

