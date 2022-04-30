import {FC} from 'react' 
import { Navigate, useParams } from 'react-router-dom'
import { Work } from '../services/works'

const ProjectContent: FC<{work: Work}> = ({work}) => {
    return <div style={{width: '60%', display: "flex", flexDirection: "column", alignItems: 'center', gap: 60, paddingTop: 40 }}>
        <div>
            <h1>{work.id.toUpperCase()}</h1>
            <p>{work.caption}</p>
        </div>
        <div style={{maxWidth: '50%'}} >
            <img src={work.image} alt={work.alt} width={'100%'} style={{ border: '1px solid black'}}/>
            <p style={{textAlign:'left', fontSize: 'small', margin: 0}}>{work.imageCaption}</p>
        </div>
        <p>{work.description}</p>
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