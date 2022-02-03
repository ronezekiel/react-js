import React, { useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Nabvar = () => {
    const {books} = useContext(BookContext);
    return (  
        <div className='navbar'>
            <h1>Ron's Reading List</h1>
            <p>Currently you have {books.length} books to get through...</p>
        </div>
    );
}
 
export default Nabvar;