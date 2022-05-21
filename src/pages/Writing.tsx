import {FC} from 'react'
import { NavBar } from '../components/NavBar'
import { WritingContent } from '../services/works'
import useIsMobile from '../services/useIsMobile'


const mobileStyles = {
    gridTemplateColumns: '1fr',
    textAlignment: 'center' as const,
    gridGap: '40px',
    sideBarGridColumn: '1',
    gridMargins: '0 auto auto auto',
    gridMaxWidth: '90%',
    headingMargin : '0 0 23px 0',
    sideBarTopMargin: '0',
    sideBarTopBorder: '3px dotted #EBE7E6',
    sideBarFlexAlignment: 'center',
    sideBarBoxPadding: '20px 0px 10px 0px'
}

const desktopStyles = {
    gridTemplateColumns: '1.8fr 1.1fr',
    textAlignment: 'left' as const,
    gridGap: '80px',
    sideBarGridColumn: '2',
    gridMargins: 'auto 60px auto 230px',
    gridMaxWidth: 'calc(100% - 260px)',
    headingMargin : '92px auto 24px auto',
    sideBarTopMargin: '90px',
    sideBarTopBorder: 'none',
    sideBarFlexAlignment: 'flex-start',
    sideBarBoxPadding: '10px 0px 0px 15px'
}

export const Writing:FC<{writingContent: WritingContent}> = ({writingContent}) => {
    window.scrollTo(0, 0)

    const styles = useIsMobile() ? mobileStyles : desktopStyles

    return <div style={{maxWidth: '100%', width: '100vw', paddingBottom: '30px'}}>
        <NavBar/>
        <div style={{maxWidth: styles.gridMaxWidth, width: '100%', textAlign: styles.textAlignment, margin: styles.gridMargins, display: 'grid', gridGap: styles.gridGap, gridTemplateColumns: styles.gridTemplateColumns}}>
            <div style={{gridColumn: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
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
            <div style={{gridColumn: styles.sideBarGridColumn, display: 'flex', flexDirection: 'column', alignItems: styles.sideBarFlexAlignment, justifyContent: 'start', marginTop: styles.sideBarTopMargin}}>
                <div style={{boxSizing:'border-box', padding: styles.sideBarBoxPadding, borderTop: styles.sideBarTopBorder, borderBottom: '3px dotted #EBE7E6', width: '90%'}}>
                    <h2 style={{fontWeight: '400', marginLeft: '-7px', marginTop: '0px'}}>Tate Modern</h2>
                    <p style={{marginTop: '-6px'}}>Bankside</p>
                    <p style={{marginTop: '-6px'}}>London SE1 9TG</p>
                    <p style={{marginTop: '-6px'}}>Plan your visit</p>
                </div>
                <div style={{boxSizing:'border-box', padding: styles.sideBarBoxPadding, borderBottom: '3px dotted #EBE7E6', width: '90%'}}>
                    <h2 style={{fontWeight: '400', marginLeft: '-7px', marginTop: '0px'}}>Dates</h2>
                    <p style={{marginTop: '-6px'}}>25 November 2021 - 2 October 2022</p>
                    <ul>
                        <li style={{marginBottom: '3px'}}>Extended opening until 22.00 on Friday 27 May for Tate Modern Lates</li>
                        <li style={{marginBottom: '3px'}}>Currently booking until 31 August 2022</li>
                        <li style={{marginBottom: '3px'}}>Advance booking is recommended</li>
                        <li style={{marginBottom: '3px'}}>Members enjoy free entry – no need to book, just turn up with your card</li>
                        <li style={{marginBottom: '3px'}}>How to book a school visit</li>
                        <li>This ticket includes access to the collection</li>
                    </ul>
                </div>
                <div style={{boxSizing:'border-box', padding: styles.sideBarBoxPadding, borderBottom: '3px dotted #EBE7E6', width: '90%'}}>
                    <h2 style={{fontWeight: '400', marginLeft: '-7px', marginTop: '0px'}}>Pricing</h2>
                    <p style={{marginTop: '-6px'}}>£16 / Free for members</p>
                    <p style={{marginTop: '-6px'}}>Concessions available</p>
                    <p style={{marginTop: '-6px'}}>£5 for Tate Collective. 16-25? Sign up and log in to book</p>
                    <p style={{marginTop: '-6px'}}>See Booking and Ticketing FAQs</p>
                    <a href={'/works'} style={{display: 'inline-block', boxSizing:'border-box', padding:'14px 17px', color:'#f2f2f2', backgroundColor: '#DB2D04', cursor:'pointer', textDecoration:'none', fontWeight: '600', marginBottom: '20px'}}>Take a look at my work</a>
                </div>
            </div>
        </div>
    </div>
}
