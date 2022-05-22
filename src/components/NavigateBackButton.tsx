import {FC} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './NavigateBackButton.css'
import { scrollToHash } from '../services/scrolling';

export interface StateType {
  previousPage: string,
}

export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const project = location.pathname.match(/[^/]+$/g)![0]
    const state = location.state as StateType

    return <div>
    <FontAwesomeIcon id='button' icon={faArrowLeftLong} size='2x' onClick={() => {
        if (state && state.previousPage === 'works') {
          navigate('/works', { state: {previousPage: 'project'} })
        }
        else {
          navigate('/home');
          scrollToHash(project)
        }
        }}/>
    </div>
}
