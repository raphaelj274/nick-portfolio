import {FC} from 'react'
import { NavBar } from '../components/NavBar'
import { WritingContent } from '../services/works'
import useIsMobile from '../services/useIsMobile'
import { scrollToTop } from '../services/scrolling'
import { WritingBar } from '../components/WritingBar'


const mobileStyles = {
    textAlignment: 'center' as const,
    margin: 'auto',
    width: '90%',
    maxWidth: 'initial',
}

const desktopStyles = {
    textAlignment: 'left' as const,
    margin: 'auto',
    maxWidth: '54%',
    width: '700px',
}

export const Writings:FC<{writings: WritingContent[]}> = ({writings}) => {

    scrollToTop()

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{maxWidth: '100%', width: '100vw', paddingBottom: '30px'}}>
        <NavBar/>
        {<WritingBar/>}
        <div style={{maxWidth: styles.maxWidth, margin: styles.margin, textAlign: styles.textAlignment, width: styles.width}}>
            {writings.map(writing => <Writing key={writing.heading} writingContent={writing}/>)}
        </div>
    </div>
}


const Writing:FC <{writingContent: WritingContent}> = ({writingContent}) => {
    return <div style={{gridColumn: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
    <h1 id={writingContent.heading} style={{margin: useIsMobile() ? '0 0 23px 0' : '92px auto 24px auto'}}>
    {writingContent.heading}
    </h1>
    {writingContent.paragraphs.map(x => {
        return <p style={{marginTop: '5px'}}>{x}</p>
    })}
    <p style={{marginTop: '5px'}}>
    <i>{writingContent.italicText}</i>
    </p>
    <div style={{width: '78%'}} id={'img'}>
        <img style={{marginTop: '20px', width: '100%'}} src={writingContent.image} alt={writingContent.imageAltText}></img>
        <figcaption style={{boxSizing:'border-box', backgroundColor: '#f2f2f2', width: '100%', color: '#808080', marginTop: '-4px', padding: '4px 4px'}}>Lubaina Himid <i>Six Tailors</i> 2019 Rennie Collection, Vancouver &copy; Lubaina Himid</figcaption>
    </div>
    <br/>
</div>
}