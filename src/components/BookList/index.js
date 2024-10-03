import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './index.css'

const BookList = (props)=>{
    const {book,removeData} = props
    const {id,title,author,genre,rating} = book
    const navigate = useNavigate()

    const onBookDetails = ()=>{
        navigate(`/bookDetails/${id}`)
    }

    const onDelete = ()=>{
        let libraryData = JSON.parse(localStorage.getItem("libraryData"))||[]
        let newLibraryData = libraryData.filter(library => library.id !== id)
        localStorage.setItem("libraryData",JSON.stringify(newLibraryData))
    }
    return(
        <li className='book-list' onClick={onBookDetails}>
            <h1 className='book-head'>{title}</h1>
            <span className='book-span'>Author: {author}</span>
            <span className='book-span'>Genre: {genre}</span>
            <span className='book-span'>Rating : <FaStar fill="yellow"/> {rating}</span>
            {removeData?<button type="button" onClick={onDelete} className="delete-button"><MdDelete/> Delete</button>:null}
        </li>
    )
}

export default BookList