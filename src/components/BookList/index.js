import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './index.css'

//This component is used to display the book list
const BookList = (props)=>{
    const {book,removeData} = props
    const {id,title,author,genre,rating} = book
    const navigate = useNavigate()

    //when the user triggers it will be navigated to bookdetails page
    const onBookDetails = ()=>{
        navigate(`/bookDetails/${id}`)
    }

    //used to delete the book from the library list
    const onDelete = ()=>{
        let libraryData = JSON.parse(localStorage.getItem("libraryData"))||[]
        let newLibraryData = libraryData.filter(library => library.id !== id)
        localStorage.setItem("libraryData",JSON.stringify(newLibraryData))
    }

    return(
        <li className='book-list' onClick={onBookDetails}>
            <img src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1" alt="book-image" className="mini-book-image"/>
            <div className="details">
            <h1 className='book-head'>{title}</h1>
            <span className='book-span'>Author: {author}</span>
            <span className='book-span'>Genre: {genre}</span>
            <span className='book-span'>Rating : <FaStar fill="#FFD700"/> {rating}</span>
            {removeData?<button type="button" onClick={onDelete} className="delete-button"><MdDelete/> Delete</button>:null}
            </div>
        </li>
    )
}

export default BookList