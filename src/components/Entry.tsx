import {FC} from 'react' 
import entry from '../images/Black-And-White-Frame-4.svg'

export const Entry:FC<{setEntered: React.Dispatch<React.SetStateAction<boolean>>}> = ({setEntered}) => {
    return <div style={{color: "white", border: '1px solid black', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <img src={entry} width={'20%'} onClick={() => setEntered(true)} alt="Image on load"/>
    </div>
}