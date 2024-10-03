import {useContext} from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Context from '../../context/Context.js'
import './index.css'

const BookDetails = ()=>{
    const {id} = useParams()
    const {bookData} = useContext(Context)
    const displayBook = bookData[id-1]

    const onLibrary = ()=>{
        let libraryData = JSON.parse(localStorage.getItem("libraryData"))||[]
        let newLibraryData = displayBook
        libraryData.push(newLibraryData)
        localStorage.setItem("libraryData",JSON.stringify(libraryData))
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
            <p><span style={{fontWeight:"bold"}}>Ratings: </span><FaStar color="#eded11"/>{displayBook.rating}</p>
            <p><span style={{fontWeight:"bold"}}>Publication Year: </span>{displayBook.publication_year}</p>
            <p style={{textAlign:"center"}}><span style={{fontWeight:"bold"}}>Description :</span>{displayBook.description}</p>
            </div>
        </>
    )
}

export default BookDetails