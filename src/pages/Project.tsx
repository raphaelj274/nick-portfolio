import {FC} from 'react' 
import { Navigate, useParams } from 'react-router-dom'
import { Work } from '../services/works'

const ProjectContent: FC<{work: Work}> = ({work}) => {
    return <div style={{width: '60%'}}>
        <h1>{work.id.toUpperCase()}</h1>
        <p>{work.caption}</p>
        <p>{work.description}</p>
        <img src={work.image} width={'100%'} alt={work.alt} style={{}}/>
    </div>
}

export const Project:FC<{works: Array<Work>}> = ({works}) => {
    const {id: projectId }= useParams<{id: string}>()
    const work = works.find(work => work.id === projectId)
    return <div style={{width: '100vw', height: ''}}>
         <div style={{width: '100%', textAlign: 'center', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {work && <ProjectContent work={work} />}
            {!work && <Navigate replace to="/home" />}
         </div>
    </div>
}