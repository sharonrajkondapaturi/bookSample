import {useState,useContext} from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import Header from '../Header'
import Context from '../../context/Context'
import './index.css'

const BookDetails = ()=>{
    const {id} = useParams()
    const {bookData,libraryData,setLibraryData} = useContext(Context)
    const displayBook = bookData[id-1]

    const onLibrary = ()=>{
        const newLibrary = displayBook
        setLibraryData(...libraryData,newLibrary)
    }

    return(
        <>
            <Header/>
            <div className='book-details'>
            <div className='book-mini-row'>
            <h1>{displayBook.title}</h1>
            <button type="button" className="book-button" onClick={onLibrary}>
            <MdLibraryAdd size={22}/>
            Add to Library
            </button>
            </div>
            <p>Ratings: <FaStar color="#eded11"/>{displayBook.rating}</p>
            <p>Publication Year: {displayBook.publication_year}</p>
            <p>Description: {displayBook.description}</p>
            </div>
        </>
    )
}

export default BookDetails