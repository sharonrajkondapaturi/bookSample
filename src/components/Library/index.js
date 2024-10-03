import Header from '../Header'
import BookList from '../BookList/index.js'
import './index.css'

//This component is used to display the library data
const Library = ()=>{
    let libraryData = JSON.parse(localStorage.getItem("libraryData"))

    //used to display Library list
    const onLibraryList = ()=>{
        return(
            <ul className='book-unlist'>
                {
                libraryData.map(eachBook=>
                <BookList key={eachBook.id} book={eachBook} removeData={true}/>
                )
                }
            </ul>
        )
    }
return(
    <>
    <Header/>
    <h1 className='collection'>My Library</h1>
    {libraryData.length !== 0?onLibraryList():(
    <center>
        <h1 className = "book-error" style={{marginTop:100}}>Seems Like No current books available in library Add Book to your Library</h1>
        <img src="https://img.freepik.com/premium-vector/business-man-thinking-vector-art-illustration-business-man-thinking-flat-vector_554682-7505.jpg" alt="book" className='book-image'/>
    </center>
     )}
    </>
)
}

export default Library