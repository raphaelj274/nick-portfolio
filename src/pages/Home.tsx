import {FC} from 'react'
import { Work } from '../services/works'
import { EmptyBar } from '../components/EmptyBar'
import { NavBar } from '../components/NavBar'
import useIsMobile from '../services/useIsMobile'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from '../services/scrolling'


const ImageContainer:FC<{work: Work}> = ({work}) => {

    scrollToTop()

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/project/${work.id}`, { state: {previousPage: 'home', selectedProject: work.id} })
    }
    const gridTemplateColumns = useIsMobile() ? '1fr 16fr 1fr' : '1fr 1fr 1fr'
    return  <div id={work.id} style={{display: 'grid', gridTemplateColumns: gridTemplateColumns, width: '100%' }}>
                <div style={{gridColumnStart: 2, gridColumnEnd: 3}} onClick={onClick}>
                    <img src={work.image} width={'100%'} alt={work.alt} style={{marginBottom: -5}}/>
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
    const marginTop = useIsMobile() ? '0px' : '100px'
    return <div style={{border: '0.5px solid white'}}>
        <EmptyBar/>
        <NavBar/>
        <div style={{color: "black", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'20px', alignItems: 'center', fontSize: 'larger', marginBottom: '10px', marginTop}}>
            {works.map((work) => <ImageContainer work={work}/>)}
        </div>
    </div>
}
