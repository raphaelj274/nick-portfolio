import {FC, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { RelatedImage, Work } from '../services/works';
import { NavBar } from '../components/NavBar'
import { NavigateBackButton } from '../components/NavigateBackButton'
import useIsMobile from '../services/useIsMobile'
import { scrollToTop } from '../services/scrolling'

const mobileStyles = {
    width: '96%',
    bodyPadding: '0 5vw 7vw 5vw',
    paragraphMaxWidth: 'initial',
    gap: 20,
    paddingTop: 0,
    fontSize: '0.85rem',
    subheadingTopMargin: '-15px'
}

const desktopStyles = {
    width: '60%',
    bodyPadding: 'initial',
    paragraphMaxWidth: '60%',
    gap: 60,
    paddingTop: 40,
    fontSize: 'initial',
    subheadingTopMargin: 'initial'
}


const ProjectContent: FC<{work: Work}> = ({work}) => {

    scrollToTop()

    const styles = useIsMobile() ? mobileStyles : desktopStyles
    const workAsRelated: RelatedImage = {image: work.image, caption: work.imageCaption}
    const [currentImage, setCurrentImage] = useState<RelatedImage>(workAsRelated)
    const carousel = [{image: work.image, caption: work.caption}, ...work.relatedImages]
    return <div>
        {useIsMobile() ? <NavBar /> :  <NavigateBackButton /> }
        <div style={{width: styles.width, display: "inline-flex", flexDirection: "column", alignItems: 'center', gap: styles.gap, paddingTop: styles.paddingTop, fontSize: styles.fontSize}}>
            <div>
                <h1>{work.id.toUpperCase()}</h1>
                <p style={{marginTop: styles.subheadingTopMargin}}>{work.caption}</p>
            </div>
            <div style={{maxWidth: styles.width, padding: styles.bodyPadding}} >
                <img src={currentImage.image} alt={currentImage.caption} width={'100%'} style={{}}/>
                <p style={{textAlign:'left', fontSize: 'small', margin: 0}}>{currentImage.caption}</p>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    {carousel.map(related => <img src={related.image} alt={related.caption} style={{width: '20%', objectFit: 'cover'}} onClick={() => setCurrentImage(related)}/>)}
                </div>
            </div>
            <p style={{padding: styles.bodyPadding, maxWidth: styles.paragraphMaxWidth, fontSize: 'small'}}>{work.description}</p>
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
