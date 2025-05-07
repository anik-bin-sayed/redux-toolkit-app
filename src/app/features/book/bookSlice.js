import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "x", author: "anik", price: 15, quantity: 80 },
    { id: 2, title: "y", author: "mark", price: 25, quantity: 20 },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    editBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);

      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { deleteBook, addBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
