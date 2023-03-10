import { useContext, useState} from 'react';
import {BookContext} from '../Context/BookContext';


const Navbar = () => {
   const { books } =  useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Easy Code Reading List</h1>
      <p>Currently you have { books.length } books to get through...</p>
    </div>
  )
}

export default Navbar;