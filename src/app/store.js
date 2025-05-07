import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import BookReducer from "./features/book/bookSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    booksR: BookReducer,
  },
});

export default store;
