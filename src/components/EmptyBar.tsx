import {FC} from 'react'

export const EmptyBar:FC = () => {
    return <div style={{height: '20px', width: '100%', position: 'fixed', backgroundColor: 'white', top: '0px', zIndex: 1}}>
    </div>
}