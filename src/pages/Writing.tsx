import {FC} from 'react'
import { NavBar } from '../components/NavBar'
import { WritingContent } from '../services/works'
import useIsMobile from '../services/useIsMobile'
import { scrollToTop } from '../services/scrolling'


const mobileStyles = {
    gridTemplateColumns: '1fr',
    textAlignment: 'center' as const,
    gridGap: '40px',
    gridMargins: '0 auto auto auto',
    gridMaxWidth: '90%',
    headingMargin : '0 0 23px 0',
}

const desktopStyles = {
    gridTemplateColumns: '0.3fr 3fr 1fr',
    textAlignment: 'left' as const,
    gridGap: '80px',
    gridMargins: 'auto 60px auto 230px',
    gridMaxWidth: 'calc(100% - 260px)',
    headingMargin : '92px auto 24px auto',
}

export const Writing:FC<{writingContent: WritingContent}> = ({writingContent}) => {

    scrollToTop()

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{maxWidth: '100%', width: '100vw', paddingBottom: '30px'}}>
        <NavBar/>
        <div style={{maxWidth: styles.gridMaxWidth, width: '100%', textAlign: styles.textAlignment, margin: styles.gridMargins, display: 'grid', gridGap: styles.gridGap, gridTemplateColumns: styles.gridTemplateColumns}}>
            <div style={{gridColumn: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
                <h1 style={{margin: styles.headingMargin}}>
                {writingContent.heading}
                </h1>
                {writingContent.paragraphs.map(x => {
                    return <p style={{marginTop: '0px'}}>{x}</p>
                })}
                <p style={{marginTop: '0px'}}>
                <i>{writingContent.italicText}</i>
                </p>
                <div style={{width: '78%'}} id={'img'}>
                    <img style={{marginTop: '20px', width: '100%'}} src={writingContent.image} alt={writingContent.imageAltText}></img>
                    <figcaption style={{boxSizing:'border-box', backgroundColor: '#f2f2f2', width: '100%', color: '#808080', marginTop: '-4px', padding: '4px 4px'}}>Lubaina Himid <i>Six Tailors</i> 2019 Rennie Collection, Vancouver &copy; Lubaina Himid</figcaption>
                </div>
            </div>
        </div>
    </div>
}
