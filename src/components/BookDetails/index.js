import {useContext} from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useParams,useNavigate } from 'react-router-dom'
import Header from '../Header'
import Context from '../../context/Context.js'
import './index.css'

//This Function Component is used to show the Book Details and add book to the library
const BookDetails = ()=>{
    const {id} = useParams()
    const {bookData} = useContext(Context)
    const displayBook = bookData[id-1]
    const navigate = useNavigate()

//if the user triggers the book it will be stored in the local storage which is library Section
    const onLibrary = ()=>{
        let libraryData = JSON.parse(localStorage.getItem("libraryData"))||[]
        let newLibraryData = displayBook
        libraryData.push(newLibraryData)
        localStorage.setItem("libraryData",JSON.stringify(libraryData))
        navigate("/myLibrary")
    }

    return(
        <>
            <Header/>
            <div className='book-details'>
            <div className='book-mini-row'>
            <h1 className='book-head2'>{displayBook.title}</h1>
            <button type="button" className="book-button" onClick={onLibrary}>
            <MdLibraryAdd size={20}/>
            Add
            </button>
            </div>
            <img src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" alt="book-image" className='book-list-image'/>
            <p><span style={{fontWeight:"bold"}}>Genre: </span>{displayBook.genre}</p>
            <p><span style={{fontWeight:"bold"}}>Ratings: </span><FaStar color="#FFD700"/>{displayBook.rating}</p>
            <p><span style={{fontWeight:"bold"}}>Publication Year: </span>{displayBook.publication_year}</p>
            <p style={{textAlign:"center"}}><span style={{fontWeight:"bold"}}>Description: </span>{displayBook.description}</p>
            </div>
        </>
    )
}

export default BookDetails