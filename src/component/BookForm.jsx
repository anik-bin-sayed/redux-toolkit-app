import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../app/features/book/bookSlice";

const BookForm = ({ editToBook, onHandleCancel, setEditBooks }) => {
  const [books, setBooks] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const dispatch = useDispatch();

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setBooks((prevBook) => ({ ...prevBook, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editToBook) {
      dispatch(editBook(books));
      setEditBooks(null);
    } else {
      dispatch(addBook({ ...books, id: nanoid() }));
    }

    setBooks({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  const handleCancel = () => {
    onHandleCancel();
    setBooks({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  useEffect(() => {
    setBooks(editToBook);
  }, [editToBook]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        id="title"
        value={books?.title}
        onChange={handleOnchange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        id="author"
        value={books?.author}
        onChange={handleOnchange}
        required
      />
      <input
        type="Number"
        name="price"
        placeholder="Price"
        id="price"
        value={books?.price}
        onChange={handleOnchange}
        required
      />
      <input
        type="Number"
        name="quantity"
        placeholder="Quantity"
        id="quantity"
        value={books?.quantity}
        onChange={handleOnchange}
        required
      />
      <button type="submit">{editToBook ? "Update Book" : "Add book"}</button>

      {editToBook && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
};

export default BookForm;
