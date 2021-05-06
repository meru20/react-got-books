import { useState, useEffect } from 'react';
import instance from '../api/apiConfig';
import BookCards from '../components/BookCards';

const HomePage = () => {
     const [books, setBooks] = useState([])
    const [showBooks, setShowBooks]= useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const getBooks = async () => {
        try{
            let {data} = await instance.get('/api/books')
            setBooks(data);
        }
        catch (e){
            console.log(e);
        }
    }

    const fetchBooks = async () => {
        try{
            let {data} = await instance.get ('/api/books');
            // console.log('books', data);
            setShowBooks(data);
            getBooks();

        }
        catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
       
        const foundBook = showBooks.filter(book => {
            return (
                book.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
        searchTerm === ''? setShowBooks(books) : setShowBooks(foundBook);
      }, [searchTerm]);
      const handleChange = (event) => {
        
        setSearchTerm(event.target.value);
   }
    return (
        <div id='home-page'>
            <div className='row text-center mt-3'>
              <div className='col'>
                  <h1>Game of Thrones Book List!</h1>
              </div>
            </div>
            {/** show button */}
            <div className='row text-center mt-3'>
              <div className='col'>
                <button className='btn btn-primary' onClick={()=>fetchBooks()}>
                    Show
                </button>
               </div>
            </div>
            {/**Search filter */}
            <div className='row mt-5'>
        <div className='col'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='hero-search'
              placeholder='Search for Game of thrones book'
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/** bookCards */}
      <div className='row'>
      
          {showBooks.map((book,index) => {
              return (
                <div className='col-sm-12 col-md-3 mt-3' key={index} >
                  <BookCards book={book} />
                  </div>

              )
          })}
      

      </div>
      

        </div>
        

    )
}
export default HomePage;