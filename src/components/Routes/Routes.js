
import { Route,Routes } from 'react-router-dom'
import { Main } from '../../Main/Main'
import { Women } from '../Women/Women'


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/women/:id' element={<Women/>}/>
        </Routes>
    )
}