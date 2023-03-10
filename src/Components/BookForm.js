import { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext'
 
const BookForm = () => {
 const { dispatch } = useContext(BookContext);
 const [title, setTitle] = useState('');
 const [author, setAuthor] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    if(title && author) {
      dispatch({type:'ADD_BOOK', book: {
        title, author
      }})
      setTitle('');
      setAuthor('');
  }
 }
  return (
    <form onSubmit={ handleSubmit } action="">
        <input
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        type='text' placeholder='book title' required />

         <input
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}
        type='text' placeholder='author' required />

        <input type='submit' value="add book"/>
    </form>
  )
}

export default BookForm