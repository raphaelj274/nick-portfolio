import {FC} from 'react' 
import sculptureA from '../images/laura-seaman-01RpyK6lKBs-unsplash.jpg'
import sculptureB from '../images/sirirat-wuthipracharat-qytWcXSCDug-unsplash.jpg'
import sculptureC from '../images/qingbao-meng-01_igFr7hd4-unsplash.jpg'
import { NavBar } from './NavBar'

export const HomePageContent:FC = () => {
    return <div style={{color: "black", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'20px', alignItems: 'center', fontSize: 'larger'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: '100px'}}>
            <div style={{gridColumnStart: 1, gridColumnEnd: 2}}>
                <NavBar/>
            </div>
            <div style={{gridColumnStart: 2, gridColumnEnd: 3}}>
                <img src={sculptureA} width={'100%'}/>
            </div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small'}}>
                    <p style={{margin: '0', fontWeight: 'bold'}}>
                        Heres is my artwork
                    </p>
                    <p style={{ margin: '0'}}>
                        Nick Collee
                    </p>
            </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            <div style={{gridColumnStart: 2, gridColumnEnd: 3}}>
                <img src={sculptureB} width={'100%'}/>
            </div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small'}}>
                    <p style={{margin: '0', fontWeight: 'bold'}}>
                        Heres is my artwork
                    </p>
                    <p style={{ margin: '0'}}>
                        Nick Collee
                    </p>
            </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            <div style={{gridColumnStart: 2, gridColumnEnd: 3}}>
                <img src={sculptureC} width={'100%'}/>
            </div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small'}}>
                    <p style={{margin: '0', fontWeight: 'bold'}}>
                        Heres is my great artwork
                    </p>
                    <p style={{ margin: '0'}}>
                        Nick Collee
                    </p>
            </div>
        </div>
    </div>
}