import {useState} from 'react'
import Header from '../Header'
import BookList from '../BookList'
import './index.css'

const bookDetails = {
    "books": [{
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "rating": 4.7,
    "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "publication_year": 1925
    },
    {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "rating": 4.8,
    "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    "publication_year": 1960
    },
    {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "rating": 4.6,
    "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    "publication_year": 1949
    },
    {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "rating": 4.9,
    "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    "publication_year": 1813
    },
    {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "rating": 4.3,
    "description": "A story about a young boy’s journey through the challenges of adolescence.",
    "publication_year": 1951
    }
    ]
    }

const Home = ()=>{
    const [bookData, setBookDetails] = useState(bookDetails.books)
    const [bookType, setBookType] = useState('')
    const onBooks = ()=>(
        <ul className='book-unlist'>
            {
            bookData.map(eachBook=>
                <BookList key={eachBook.id} book={eachBook}/>
            )
            }
        </ul>
    )

    const onBookDetails = (event)=>{
        setBookType(bookType)
        const filterBooks = bookDetails.books.filter(book => book.title.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log(filterBooks)
        setBookDetails(filterBooks)
    }

    

    return(
        <>
        <Header/>
        <div className='book-display'>
        <input className='book-input' type="search" placeholder='Enter Title' onChange={onBookDetails}/>
            {onBooks()}
        </div>
        </>
    )
}
export default Home