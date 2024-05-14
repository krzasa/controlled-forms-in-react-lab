import { useState } from 'react'
import Bookshelf from './components/Bookshelf.jsx'
import './App.css'
import './index.css'

const App = () => {
  const [books, setBooks] = useState([ { 
    title: 'Fourth Wing', 
    author: 'Rebecca Yarros' 
  },
  { title: 'The Lion, the Witch and the Wardrobe', 
  author: 'C.S. Lewis' 
},
]);
const [newBook, setNewBook] = useState({
  title: '',
  author: '',
});

const handleInputChange = (event) =>{
  const { name, value } = event.target;
  setNewBook({...newBook, [name]: value });
}
const handleSubmit = (event) => {
  event.preventDefault();
  setBooks([...books, newBook]);
  setNewBook({
    title: '',
    author: '',
  });
}

return (
  <>
      <h1>My Bookshelf</h1>
      <Bookshelf 
      books={books}
      newBook={newBook}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
       />
    </>
)
};

export default App;
