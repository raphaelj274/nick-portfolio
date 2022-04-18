import {FC} from 'react' 
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import { Work } from '../services/works'

const ContactElement:FC<{work: Work}> = ({work}) => {
    const navigate = useNavigate();
    const onClick = () => navigate(`/project/${work.id}`)
    return <div style={{}} onClick={onClick}>
        <img src={work.image} width={'100%'} alt={work.alt} style={{}}/>
    </div>
}


export const Works:FC<{works: Array<Work>}> = ({works}) => {
    return <div style={{width: '100vw', height: '100vh'}}>
         <NavBar/>
         <div style={{width: '100%', display: 'flex', flexDirection: 'row-reverse'}}>   
            <div style={{width: '70%', textAlign: 'center', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr)', gap: 20, margin: 100}}>
                {works.map(work => <ContactElement work={work}/>)}
                {works.sort((a,b) => a.alt.length > b.alt.length ? 1 : -1).map(work => <ContactElement work={work}/>)}
                {works.map(work => <ContactElement work={work}/>)}
            </div>
         </div>
    </div>
}