import {FC} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './NavigateBackButton.css'
import scrollToHash from '../services/scrollToHash';

export interface StateType {
  previousPage: string,
  selectedProject: string
}

export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as StateType
    const project = state ? state.selectedProject : null

    return <div>
    <FontAwesomeIcon id='button' icon={faArrowLeftLong} size='2x' onClick={() => {
        if (state && state.previousPage === 'works') {
          navigate('/works', { state: {previousPage: 'project', selectedProject: null} })
        }
        else if (state && project) {
          navigate('/home', { state: {previousPage: 'project', selectedProject: null} })
          scrollToHash(project)
        }
        else {
          navigate('/home')
          window.scrollTo(0,0)
        }
        }}/>
    </div>
}
