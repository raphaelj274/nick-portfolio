import {FC} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './NavigateBackButton.css'

export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();
    let location = useLocation();

    return <div>
    <FontAwesomeIcon id='button' icon={faArrowLeftLong} size='2x' onClick={() => {
        if (location.state === 'works') navigate('/works')
        else navigate('/home')
        window.scrollTo(0, 0);
        }}/>
    </div>
}

