// import CounterApp from "./component/CounterApp";

import { useState } from "react";
import BookApp from "./component/BookApp";
import BookForm from "./component/bookForm";

const App = () => {
  const [editBooks, setEditBooks] = useState(null);

  const onHandleEdit = (editToBook) => {
    setEditBooks(editToBook);
  };
  const onHandleCancel = () => {
    setEditBooks(null);
  };
  return (
    <>
      {/* <CounterApp /> */}
      <BookForm
        editToBook={editBooks}
        setEditBooks={setEditBooks}
        onHandleCancel={onHandleCancel}
      />
      <BookApp onHandleEdit={onHandleEdit} />
    </>
  );
};

export default App;
