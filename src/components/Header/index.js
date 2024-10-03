import './index.css'

//This component is used as a Header to redirect to respective pages
const Header = ()=>{
return(
    <>
    <header className='nav-back'>
        <nav>
            <a className="nav-ele" href="/">Home</a>
            <a className="nav-ele" href="/myLibrary">My Library</a>
        </nav>
    </header>
    </>
)
}

export default Header