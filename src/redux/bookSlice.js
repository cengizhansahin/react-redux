const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  books: [],
  filteredBooks: null,
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setFilteredBooks: (state, action) => {
      state.filteredBooks = action.payload;
    },
  },
});

export const { setBooks, setFilteredBooks, setInputGirdi } = bookSlice.actions;
export default bookSlice.reducer;
