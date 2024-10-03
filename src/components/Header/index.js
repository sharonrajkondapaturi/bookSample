import {useNavigate} from 'react-router-dom'
import './index.css'

//This component is used as a Header to redirect to respective pages
const Header = ()=>{
    const navigate = useNavigate()

    const onHome = ()=>{
        navigate("/")
    }
    const onLib = ()=>{
        navigate('/myLibrary')
    }
return(
    <>
    <header className='nav-back'>
        <nav>
            <span className="nav-ele" onClick={onHome}>Home</span>
            <span className="nav-ele" onClick={onLib}>My Library</span>
        </nav>
    </header>
    </>
)
}

export default Header