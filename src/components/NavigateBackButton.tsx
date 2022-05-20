import {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export const NavigateBackButton: FC = () => {
    const navigate = useNavigate();

    return <div>
    <FontAwesomeIcon icon={faArrowLeftLong} size='2x' style={{position: 'fixed', top: 68, left: 200, cursor: 'pointer'}} onClick={() => {
        navigate(-1);
        window.scrollTo(0, 0);
        }}/>
    </div>
}

