import Header from '../Header'
import BookList from '../BookList/index.js'
import './index.css'

const Library = ()=>{
    let libraryData = JSON.parse(localStorage.getItem("libraryData"))
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
    {onLibraryList()}
    </>
)
}

export default Library