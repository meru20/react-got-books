const BookCards = ({book}) => {
    const formatDate = (released) => {
        
        let date = new Date(released);
        var output = (date.getMonth()+1)+ "-" + date.getDate()   + "-" + date.getFullYear();
        
        
       
        return output


    }
    return (
        <div className= 'card mb-3'>
            <div className='card-header text-center' >
               <h4>{book.name}</h4> 
            </div>
            <div className='card-body text-center'>
                <div className='text-center'></div>
                <h5 className='card-title'>{book.authors}</h5>
                <h6 className='card-title mt-3 '>{book.numberOfPages}{'  '}Pages</h6>
                <h6 className='card-title mt-3'>{book.country}</h6>
                <h6 className='card-title text-secondary mt-3'>{formatDate(book.released)}</h6>
            </div>
            <div className='card-footer  d-flex justify-content-between'>
            ISBN {''}
              <span>
              {book.isbn}

              </span>
             
               
            </div>
        </div>
    )
}
export default BookCards;