import {FC, useState} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { RelatedImage, Work } from '../services/works'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const ProjectContent: FC<{work: Work}> = ({work}) => {
    const workAsRelated: RelatedImage = {image: work.image, caption: work.imageCaption}
    const [currentImage, setCurrentImage] = useState<RelatedImage>(workAsRelated)
    const carousel = [{image: work.image, caption: work.caption}, ...work.relatedImages]
    const navigate = useNavigate();
    return <div>
        <FontAwesomeIcon icon={faArrowLeftLong} size='2x' style={{position: 'fixed', top: 68, left: 200, cursor: 'pointer'}} onClick={() => {
        navigate(-1);
        window.scrollTo(0, 0);
        }}/>
        <div style={{width: '60%', display: "inline-flex", flexDirection: "column", alignItems: 'center', gap: 60, paddingTop: 40 }}>
            <div>
                <h1>{work.id.toUpperCase()}</h1>
                <p>{work.caption}</p>
            </div>
            <div style={{maxWidth: '60%'}} >
                <img src={currentImage.image} alt={currentImage.caption} width={'100%'} style={{}}/>
                <p style={{textAlign:'left', fontSize: 'small', margin: 0}}>{currentImage.caption}</p>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    {carousel.map(related => <img src={related.image} alt={related.caption} style={{width: '20%', objectFit: 'cover'}} onClick={() => setCurrentImage(related)}/>)}
                </div>
            </div>
            <p style={{maxWidth: '60%', fontSize: 'small'}}>{work.description}</p>
        </div>
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