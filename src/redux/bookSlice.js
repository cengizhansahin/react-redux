const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  books: [],
  filteredBooks: null,
  inputGirdi: "",
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
    setInputGirdi: (state, action) => {
      state.inputGirdi = action.payload;
    },
  },
});

export const { setBooks, setFilteredBooks, setInputGirdi } = bookSlice.actions;
export default bookSlice.reducer;
