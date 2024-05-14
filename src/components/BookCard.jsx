const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookCard;