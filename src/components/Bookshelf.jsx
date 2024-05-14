import BookCard from "./BookCard.jsx"
const Bookshelf = (props) => {
    return (
        <>
        <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" value={props.newBook.title} onChange={props.handleInputChange} />
            <label htmlFor="author">Author: </label>
            <input type="text" name="author" value={props.newBook.author} onChange={props.handleInputChange} />
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          
          {props.books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div> 
      </>
    )
}


export default Bookshelf