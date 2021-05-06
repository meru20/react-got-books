import { useState, useEffect } from 'react';
import instance from '../api/apiConfig';
import BookCards from '../components/BookCards';

const HomePage = () => {
    const [showBooks, setShowBooks]= useState([])

    const fetchBooks = async () => {
        try{
            let {data} = await instance.get ('/api/books');
            // console.log('books', data);
            setShowBooks(data);

        }
        catch (e){
            console.log(e)
        }
    }
    // useEffect(() => {
    //     fetchBooks ();
    //   }, []);
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
              value=''
              onChange=''
            />
          </div>
        </div>
      </div>
      <div className='row'>
      
          {showBooks.map((book,index) => {
              return (
                <div className='col-sm-12 col-md-3 mt-3'>
                  <BookCards book={book}/>
                  </div>

              )
          })}
      

      </div>
      

        </div>
        

    )
}
export default HomePage;