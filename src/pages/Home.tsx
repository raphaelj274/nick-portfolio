import {FC} from 'react' 
import { Work } from '../services/works'
import { EmptyBar } from '../components/EmptyBar'
import { NavBar } from '../components/NavBar'

const ImageContainer:FC<{work: Work}> = ({work}) => {
    return  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
    <div style={{gridColumnStart: 2, gridColumnEnd: 3}}>
        <img src={work.image} width={'100%'} alt={work.alt} style={{marginBottom: -5}}/>
    </div>
    <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small', fontStyle:'italic'}}>
        <p style={{margin: '0', fontWeight: 'bold'}}>
                    {work.date}
        </p>
        <p style={{margin: '0'}}>
                    {work.caption}
        </p>
    </div>
</div>
}

export const Home:FC<{works: Array<Work>}> = ({works}) => {
    return <div style={{border: '0.5px solid white'}}>
        <EmptyBar/>
        <NavBar/>
        <div style={{color: "black", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'20px', alignItems: 'center', fontSize: 'larger', marginBottom: '10px', marginTop: '100px'}}>
            {works.map((work) => <ImageContainer work={work}/>)}
        </div>
    </div>
    
}