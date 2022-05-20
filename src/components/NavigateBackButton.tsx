import {FC} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './NavigateBackButton.css'
import useIsMobile from '../services/useIsMobile'


export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();
    const id = useIsMobile() ? 'mobile-button' : 'button'
    let location = useLocation();

    return <div>
    <FontAwesomeIcon id={id} icon={faArrowLeftLong} size='2x' onClick={() => {
        if (location.state === 'works') navigate('/works')
        else navigate('/home')
        window.scrollTo(0, 0);
        }}/>
    </div>
}

