import {FC} from 'react'
import { NavBar } from '../components/NavBar'
import placeholder from '../images/tateimage.jpg'

export const Writing:FC = () => {
    return <div style={{maxWidth: '100%', width: '100vw', height: '100vh', paddingBottom: '320px'}}>
        <NavBar/>
        <div style={{maxWidth: 'calc(100% - 260px)', width: '100%', textAlign: 'left', marginLeft: '230px', marginRight: '60px', display: 'grid', gridGap: '80px', gridTemplateColumns: '1.8fr 1.1fr'}}>
            <div style={{gridColumn: '1', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1 style={{textAlign: 'left', margin: '92px auto 24px auto'}}>
                A theatrical exhibition by the Turner Prize winning artist and cultural activist
                </h1>
                <p style={{textAlign: 'left'}}>
                This large-scale exhibition will debut recent work and include
                selected highlights from Lubaina Himid’s influential career.
                Taking inspiration from her interest in theatre, the exhibition
                will unfold in a sequence of scenes designed to place visitors
                centre-stage and backstage.
                </p>
                <p style={{textAlign: 'left', marginTop: '0px'}}>
                Initially trained in theatre design, Himid is known for her
                innovative approaches to painting and to social engagement.
                She has been pivotal in the UK since the 1980s for her contributions
                to the British Black arts movement, making space for the expression
                and recognition of Black experience and women’s creativity. Over the
                last decade, she has earned international recognition for her figurative
                paintings, which explore overlooked and invisible aspects of history and
                of contemporary everyday life. In 2017 she was awarded the Turner Prize
                and in 2018 she was bestowed with the honorary title of CBE for her
                contributions to the arts.
                </p>
                <p style={{textAlign: 'left', marginTop: '0px'}}>
                <i>Exhibition organised by Tate Modern in collaboration with Musée
                    cantonal des Beaux-Arts de Lausanne/Plateforme 10</i>
                </p>
                <div style={{width: '78%'}} id={'img'}>
                    <img style={{marginTop: '20px', width: '100%'}} src={placeholder} alt={'Placeholder'}></img>
                    <figcaption style={{boxSizing:'border-box', backgroundColor: '#f2f2f2', width: '100%', color: '#808080', marginTop: '-4px', padding: '4px 4px'}}>Lubaina Himid <i>Six Tailors</i> 2019 Rennie Collection, Vancouver &copy; Lubaina Himid</figcaption>
                </div>
            </div>
            <div style={{gridColumn: '2', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '90px'}}>
                <div style={{boxSizing:'border-box', padding: '10px 0px 0px 15px', borderBottom: '3px dotted #EBE7E6', width: '90%'}}>
                    <h2 style={{fontWeight: '400', marginLeft: '-7px', marginTop: '0px'}}>Tate Modern</h2>
                    <p style={{marginTop: '-6px'}}>Bankside <br></br> London SE1 9TG <br></br> Plan your visit</p>
                </div>
                <div style={{boxSizing:'border-box', padding: '10px 0px 0px 15px', borderBottom: '3px dotted #EBE7E6', width: '90%'}}>
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
                <div style={{boxSizing:'border-box', padding: '10px 0px 29px 15px', borderBottom: '3px dotted #EBE7E6', width: '90%'}}>
                    <h2 style={{fontWeight: '400', marginLeft: '-7px', marginTop: '0px'}}>Pricing</h2>
                    <p style={{marginTop: '-6px', marginBottom:'32px'}}>£16 / Free for members<br></br><br></br>Concessions available<br></br><br></br>£5 for Tate Collective. 16-25? Sign up and log in to book <br></br><br></br>See Booking and Ticketing FAQs<br></br></p>
                    <a href={'/works'} style={{boxSizing:'border-box', padding:'14px 17px', color:'#f2f2f2', backgroundColor: '#DB2D04', cursor:'pointer', textDecoration:'none', fontWeight: '600'}}>Take a look at my work</a>
                </div>
            </div>
        </div>
    </div>
}