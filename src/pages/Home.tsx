import {FC} from 'react'
import { Work } from '../services/works'
import { EmptyBar } from '../components/EmptyBar'
import { NavBar } from '../components/NavBar'
import useIsMobile from '../services/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../services/scrolling'
import { homepageText } from '../services/works'
import '../stylesheets/Home.css'


const ImageContainer:FC<{work: Work}> = ({work}) => {

    const image = work.backupImage || work.image

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/project/${work.id}`, { state: {previousPage: 'home', selectedProject: work.id} })
    }
    const gridTemplateColumns = useIsMobile() ? '1fr 16fr 1fr' : '1fr 1fr 1fr'
    return  <div id={work.id} style={{display: 'grid', gridTemplateColumns: gridTemplateColumns, width: '100%' }}>
                <div style={{gridColumnStart: 2, gridColumnEnd: 3}} onClick={onClick}>
                    <img src={image} width={'100%'} alt={work.alt} style={{marginBottom: -5}}/>
                </div>
                {!useIsMobile() && <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small', fontStyle:'italic'}}>
                    <p style={{margin: '0', fontWeight: 'bold'}}>
                        {work.date}
                    </p>
                    <p style={{margin: '0'}}>
                        {work.caption}
                    </p>
                </div>}
            </div>
}

export const Home:FC<{works: Array<Work>}> = ({works}) => {

    scrollToTop()

    const margin = useIsMobile() ? '0px 0px 40px auto' : '100px 50px 122px auto'

    return <div style={{border: '0.5px solid white'}}>
        <EmptyBar/>
        <NavBar/>
        {useIsMobile() || <p id='text-box'>{homepageText}</p>}
        <div id='main-box' style={{color: "black", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'20px', alignItems: 'center', fontSize: 'larger', margin: margin}}>
            {works.map((work) => <ImageContainer work={work}/>)}
        </div>
    </div>
}



