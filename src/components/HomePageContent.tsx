import {FC} from 'react' 
import { NavBar } from './NavBar'

const ImageContainer:FC<{image: string}> = ({image}) => {
    return  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
    <div style={{gridColumnStart: 2, gridColumnEnd: 3}}>
        <img src={image} width={'100%'} alt="Nick's sculpture"/>
    </div>
    <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small'}}>
        <p style={{margin: '0', fontStyle: 'italic', textAlign: 'left', fontSize: 'small', fontWeight: 'bold'}}>
                    Untitled 2021
        </p>
        <p style={{margin: '0', fontStyle: 'italic', textAlign: 'left', fontSize: 'small'}}>
                    Concrete sculpture and moving image, London 
        </p>
    </div>
</div>
}

export const HomePageContent:FC<{images: Array<string>}> = ({images}) => {
    return <div style={{color: "black", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'20px', alignItems: 'center', fontSize: 'larger', marginBottom: '10px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: '100px'}}>
            <div style={{gridColumnStart: 1, gridColumnEnd: 2}}>
                <NavBar/>
            </div>
            <div style={{gridColumnStart: 2, gridColumnEnd: 3}}>
                <img src={images[0]} width={'100%'} alt="Nick's sculpture"/>
            </div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',  marginLeft: '15px', fontSize: 'small'}}>
                <p style={{margin: '0', fontStyle: 'italic', textAlign: 'left', fontSize: 'small', fontWeight: 'bold'}}>
                        Untitled 2021
                </p>
                <p style={{margin: '0', fontStyle: 'italic', textAlign: 'left', fontSize: 'small'}}>
                        Concrete sculpture and moving image, London 
                </p>
            </div>
        </div>
        <ImageContainer image={images[1]}/>
        <ImageContainer image={images[2]}/>
        <ImageContainer image={images[0]}/>
        <ImageContainer image={images[1]}/>
    </div>
}