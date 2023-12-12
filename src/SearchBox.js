import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba black'
                type='search' 
                placeholder='Search planets' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;