import {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import { Work } from '../services/works'
import StackGrid from "react-stack-grid";


const ContactElement:FC<{work: Work}> = ({work}) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/project/${work.id}`, { state: 'works' })
        window.scrollTo(0, 0);
    }
    return <div style={{padding: 3}} onClick={onClick}>
        <img src={work.image} width={'100%'} alt={work.alt} style={{}}/>
    </div>
}


export const Works:FC<{works: Array<Work>}> = ({works}) => {
    return <div style={{width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{border: '1px solid white'}}>
         </div>
            <StackGrid columnWidth={300} style={{width: '1000px', marginTop: '100px' , marginLeft: '300px', overflow: 'hidden'}}>
                {works.map(work => <ContactElement work={work}/>)}
                {works.map(work => <ContactElement work={work}/>)}
                {works.map(work => <ContactElement work={work}/>)}
            </StackGrid>
    </div>
}