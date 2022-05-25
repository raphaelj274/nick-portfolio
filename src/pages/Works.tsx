import {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import { Work } from '../services/works'
import StackGrid from "react-stack-grid";
import { scrollToTop } from '../services/scrolling';
import useIsMobile from '../services/useIsMobile';

const mobileStyles = {
    gridMargin: '30px auto auto auto',
    width: '95%',
    columnWidth: '40%'

}

const desktopStyles = {
    gridMargin: '100px auto auto 200px',
    width: 'calc(100% - 380px)',
    columnWidth: '33%'
}



const ContactElement:FC<{work: Work}> = ({work}) => {

    scrollToTop()

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/project/${work.id}`, { state: {previousPage: 'works'} })
    }
    return <div style={{padding: 3}} onClick={onClick}>
        <img src={work.image} width={'100%'} alt={work.alt} style={{}}/>
    </div>
}


export const Works:FC<{works: Array<Work>}> = ({works}) => {

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{maxWidth: '100%', width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{border: '1px solid white'}}>
         </div>
            <StackGrid columnWidth={styles.columnWidth} style={{boxSizing: 'border-box', width: styles.width, margin: styles.gridMargin, overflow: 'hidden'}}>
                {works.map(work => <ContactElement work={work}/>)}
                {works.map(work => <ContactElement work={work}/>)}
                {works.map(work => <ContactElement work={work}/>)}
            </StackGrid>
    </div>
}
