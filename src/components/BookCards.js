const BookCards = ({book}) => {
    return (
        <div className= 'card mb-3'>
            <div className='card-header text-center'>
                {book.name}
            </div>
            <div className='card-body'>
                <h4 className='card-title'>{book.authors}</h4>
                <h5 className='card-title'>{book.numberOfPages}</h5>
                <h5 className='card-title'>{book.country}</h5>
                <h6 className='card-title'>{book.isbn}</h6>
            </div>
            <div className='card-footer'>
                {book.released}
            </div>
        </div>
    )
}
export default BookCards;