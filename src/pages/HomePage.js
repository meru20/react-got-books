const HomePage = () => {
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
                <button className='btn btn-primary'>
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

        </div>
        

    )
}
export default HomePage;