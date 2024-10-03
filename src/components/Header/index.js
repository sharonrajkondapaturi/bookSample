import {useNavigate} from 'react'
import './index.css'

//This component is used as a Header to redirect to respective pages
const Header = ()=>{
    const navigate = useNavigate()
    const onLib = ()=>{
        navigate('/myLibrary')
    }
return(
    <>
    <header className='nav-back'>
        <nav>
            <a className="nav-ele" href="/">Home</a>
            <a className="nav-ele" href="/myLibrary"onClick={onLib}>My Library</a>
        </nav>
    </header>
    </>
)
}

export default Header