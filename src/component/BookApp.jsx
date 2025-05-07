import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../app/features/book/bookSlice";

const BookApp = ({ onHandleEdit }) => {
  const { books } = useSelector((state) => state.booksR);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book) => {
    onHandleEdit(book);
  };

  return (
    <div>
      <h1>List of Books</h1>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                {book.title} by {book.author} price : {book.price} quantity :{" "}
                {book.quantity}
                <button onClick={() => handleDelete(book.id)}>Delete</button>
                <button onClick={() => handleEdit(book)}>Edit</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

export default BookApp;
