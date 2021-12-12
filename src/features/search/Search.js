import React from 'react';
import { clearSearchTerm, setSearchTerm , selectSearch} from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import './search.css'

export function Search (){
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);

    const handleChange = (event) => {
        const userInput = event.target.value;
        dispatch(setSearchTerm(userInput));
    }
    const handleClick = () =>{ // clear search button
        dispatch(clearSearchTerm());
    }
    const handleSubmit = (event) => {
        // ***** form submission is disabled! *****
        event.preventDefault();
    }

    return (
        <header>
          <div></div>
          <form onSubmit={handleSubmit} >
              <input className="searchBar" type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
              {
              searchTerm
                  ?<button className="clearSearch" onClick={handleClick}>X</button>
                  :<></>
              }
          </form>
        </header>
    )
}