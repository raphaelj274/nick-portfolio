import {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './NavigateBackButton.css'

export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();

    return <div>
    <FontAwesomeIcon id='button' icon={faArrowLeftLong} size='2x' onClick={() => {
        navigate(-1);
        window.scrollTo(0, 0);
        }}/>
    </div>
}

