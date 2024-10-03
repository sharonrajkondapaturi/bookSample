import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './index.css'

const BookList = (props)=>{
    const {book} = props
    const {id,title,author,genre,rating} = book
    const navigate = useNavigate()

    const onBookDetails = ()=>{
        navigate(`bookDetails/:${id}`)
    }
    return(
        <li className='book-list' onClick={onBookDetails}>
            <h1 className='book-head'>{title}</h1>
            <span className='book-span'>Author: {author}</span>
            <span className='book-span'>Genre: {genre}</span>
            <span className='book-span'>Rating : <FaStar fill="yellow"/> {rating}</span>
        </li>
    )
}

export default BookList