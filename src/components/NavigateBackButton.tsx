import {FC} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './NavigateBackButton.css'

interface StateType {
  previousPage: string
}

export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as StateType

    return <div>
    <FontAwesomeIcon id='button' icon={faArrowLeftLong} size='2x' onClick={() => {
        if (state === null || state.previousPage !== 'works') navigate('/home')
        else navigate('/works')
        window.scrollTo(0, 0)
        }}/>
    </div>
}

