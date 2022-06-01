import {FC, useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { RelatedImage, Work } from '../services/works';
import { NavBar } from '../components/NavBar'
import { NavigateBackButton } from '../components/NavigateBackButton'
import useIsMobile from '../services/useIsMobile'
import { scrollToTop } from '../services/scrolling'
import ProgressiveImage from '../components/ProgressiveImage';

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

    useEffect(() => scrollToTop(), [])

    const styles = useIsMobile() ? mobileStyles : desktopStyles
    const workAsRelated: RelatedImage = {image: work.image, backupImage: work.backupImage, caption: work.imageCaption}
    const [currentImage, setCurrentImage] = useState<RelatedImage>(workAsRelated)
    const [currentKey, setCurrentKey] = useState<number>(1)
    const carousel = [{image: work.image, backupImage: work.backupImage, caption: work.caption}, ...work.relatedImages]
    return <div>

        {useIsMobile() ? <NavBar /> : <NavigateBackButton /> }
        <div style={{width: styles.width, display: "inline-flex", flexDirection: "column", alignItems: 'center', gap: styles.gap, paddingTop: styles.paddingTop, fontSize: styles.fontSize}}>
            <div>
                <h1>{work.id.toUpperCase()}</h1>
                <p style={{marginTop: styles.subheadingTopMargin}}>{work.caption}</p>
            </div>
            <div style={{maxWidth: styles.width, padding: styles.bodyPadding}} >
                <ProgressiveImage src={currentImage.image} placeholder={currentImage.backupImage} width={'100%'} alt={currentImage.caption} main={true} key={currentKey} />
                <p style={{textAlign:'left', fontSize: 'small', margin: 0}}>{currentImage.caption}</p>
                <div style={{display: 'flex', marginTop: '20px', justifyContent: 'space-between', maxWidth: '100%'}}>
                    {carousel.map(related => {
                        return <ProgressiveImage src={related.image} placeholder={related.backupImage} alt={related.caption} main={false} numberOfColumns={carousel.length} onClick={() => {
                                setCurrentImage(related)
                                setCurrentKey(currentKey + 1)
                                }}/>
                    })}
                </div>
            </div>
            <p style={{padding: styles.bodyPadding, maxWidth: styles.paragraphMaxWidth, fontSize: 'small'}}>{work.description}</p>
        </div>
    </div>
}

export const Project:FC<{works: Array<Work>}> = ({works}) => {
    const {id: projectId }= useParams<{id: string}>()
    const work = works.find(work => work.id === projectId)
    return <div style={{width: '100vw', maxWidth:'100%', height: ''}}>
         <div style={{width: '100%', textAlign: 'center', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {work && <ProjectContent work={work} />}
            {!work && <Navigate replace to="/home" />}
         </div>
    </div>
}
